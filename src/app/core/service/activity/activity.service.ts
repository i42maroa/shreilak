import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivityWithChapterInterface } from '../../../data/interface/activity.interface';
import { SupabaseService } from '../supabase/supabase.service';
import { DataCacheService, TTL_10_MIN } from '../cache/data-cache.service';
import { CACHE_KEY_ACTIVITY } from '../../../data/cache';


@Injectable({
    providedIn: 'root'
})
export class ActivityPageService {

    private dataCache = new Map<string, DataCacheService<ActivityWithChapterInterface | null>>;
    private activity$ = new BehaviorSubject<ActivityWithChapterInterface | undefined | null>(undefined);

    constructor( private supabaseService: SupabaseService) { }

    loadActivity(idActivity:number){
        this.cleanActivity();
        const cacheKey =CACHE_KEY_ACTIVITY + idActivity;
        if(!this.dataCache.has(cacheKey)){
            const cache = new DataCacheService<ActivityWithChapterInterface | null>(
                cacheKey,
                () => this.supabaseService.getActivity(idActivity),
                TTL_10_MIN
            );
            this.dataCache.set(cacheKey, cache);
        }

        this.dataCache.get(cacheKey)!.get()
            .subscribe(chapter => this.activity$.next(chapter))
    }

    cleanActivity(){
        this.activity$.next(undefined);
    }

    get activity(){
        return this.activity$
    }
}
