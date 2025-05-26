import { Observable, of, shareReplay, tap } from 'rxjs';

export const TTL_5_MIN = 5 * 60 * 1000;
export const TTL_10_MIN = 10 * 60 * 1000;


export class DataCacheService<T> {

    private cache$: Observable<T> | null = null;

    constructor(
        private cacheKey: string,
        private fetchFn: () => Observable<T>,
        private ttl: number = TTL_5_MIN
    ) { }

    get(): Observable<T> {
        const cached = this.getFromLocalStorage();
        if (cached) {
            return of(cached);
        }
        if (!this.cache$) {
            this.cache$ = this.fetchFn()
                .pipe(
                    tap(data => this.saveToLocalStorage(data)),
                    shareReplay(1)
                );
        }

        return this.cache$;
    }

    refresh(): void {
        this.cache$ = null;
        localStorage.removeItem(this.cacheKey);
    }

    private saveToLocalStorage(data: T): void {
        const record = { timestamp: Date.now(), data };
        localStorage.setItem(this.cacheKey, JSON.stringify(record));
    }

    private getFromLocalStorage(): T | null {
        const raw = localStorage.getItem(this.cacheKey);
        if (!raw) return null;

        try {
            const record = JSON.parse(raw);
            if (Date.now() - record.timestamp < this.ttl) {
                return record.data;
            } else {
                localStorage.removeItem(this.cacheKey);
                return null;
            }
        } catch {
            localStorage.removeItem(this.cacheKey);
            return null;
        }
    }
}
