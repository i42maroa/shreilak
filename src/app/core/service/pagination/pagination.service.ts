import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {

    private resourcePage$ = new BehaviorSubject<number>(1);
    private totalResource$ = new BehaviorSubject<number>(0);
    private perPage = 5;

    get currentPage():Observable<number>{
        return this.resourcePage$.asObservable();
    }

    get totalResource():Observable<number> {
        return this.totalResource$.asObservable();
    }

    setPage(page: number) {
        if (page < 1) return;
        this.resourcePage$.next(page);
    }

    setTotalResource(total:number){
        this.totalResource$.next(total);
    }

    nextPage() {
        this.setPage(this.resourcePage$.value + 1);
    }

    anterior() {
        this.setPage(this.resourcePage$.value - 1);
    }

    reset() {
        this.setPage(1);
    }

    get resourcePerPage():number{
        return this.perPage;
    }
}
