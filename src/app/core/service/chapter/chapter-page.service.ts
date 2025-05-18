import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from '../supabase/supabase.service';
import { CHAPTER_EMPTY, ChapterInterface } from '../../../data/interface/chapter.interface';
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

    dataCache = new Map<string, DataCacheService<ChapterInterface>>;
    pageNumber$ = new BehaviorSubject<number>(0);
    chapter$ = new BehaviorSubject<ChapterInterface>(CHAPTER_EMPTY);

    constructor(private supabaseService: SupabaseService) {}

    setChapter(chapterId:number){
        const cacheKey =CACHE_KEY_CHAPTER + chapterId;
        if(!this.dataCache.has(cacheKey)){
            const cache = new DataCacheService<ChapterInterface>(
                cacheKey,
                () =>this.supabaseService.getCharapter(chapterId),
                TTL_10_MIN
            );
            this.dataCache.set(cacheKey, cache);
        }

        this.dataCache.get(cacheKey)!.get()
            .subscribe(chapter => this.chapter$.next(chapter))
    }

    get getChapter(){
        return this.chapter$;
    }

    get getPageNumber(){
        return this.pageNumber$;
    }
}
