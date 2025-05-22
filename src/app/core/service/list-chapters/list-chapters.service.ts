import { Injectable } from '@angular/core';
import { DataCacheService, TTL_10_MIN } from '../cache/data-cache.service';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from '../supabase/supabase.service';
import { CACHE_KEY_CHAPTERS } from '../../../data/cache';

@Injectable({
    providedIn: 'root'
})
export class ListChaptersService {

    private dataCache: DataCacheService<ChapterInterface[] | null>;
    private listChapters = new BehaviorSubject<ChapterInterface []| undefined | null>(undefined);

    constructor(private supabaseService: SupabaseService) {
        this.cleanList()
        this.dataCache = new DataCacheService(
            CACHE_KEY_CHAPTERS,
            () => this.supabaseService.getChapters(),
            TTL_10_MIN
        );

        this.dataCache.get()
            .subscribe(chapter => this.listChapters.next(chapter))
    }

    cleanList(){
        this.listChapters.next(undefined);
    }

    get getListChapters(): Observable<ChapterInterface[]| undefined | null>{
        return this.listChapters;
    }
}
