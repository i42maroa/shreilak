import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from '../supabase/supabase.service';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { DataCacheService, TTL_10_MIN } from '../cache/data-cache.service';
import { CACHE_KEY_CHAPTER } from '../../../data/cache';

export interface buttonInterface{
    title:string,
    show:boolean
}

@Injectable({
    providedIn: 'root'
})
export class CharapterPageService {

    private dataCache = new Map<string, DataCacheService<ChapterInterface | null>>;
    private chapter$ = new BehaviorSubject<ChapterInterface| undefined | null>(undefined);

    constructor(private supabaseService: SupabaseService) {}

    setChapter(chapterId:number): void{
        this.cleanChapter();
        const cacheKey = CACHE_KEY_CHAPTER + chapterId;
        if(!this.dataCache.has(cacheKey)){
            const cache = new DataCacheService<ChapterInterface | null>(
                cacheKey,
                () => this.supabaseService.getCharapter(chapterId),
                TTL_10_MIN
            );

            this.dataCache.set(cacheKey, cache);
        }

        this.dataCache.get(cacheKey)!.get()
            .subscribe(chapter => this.chapter$.next(chapter))
    }

    cleanChapter(){
        this.chapter$.next(undefined);
    }

    get getChapter(): Observable<ChapterInterface| undefined | null>{
        return this.chapter$;
    }
}
