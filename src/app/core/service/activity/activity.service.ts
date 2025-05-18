import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ACTIVITY_EMPTY, ActivityInterface } from '../../../data/interface/activity.interface';
import { SupabaseService } from '../supabase/supabase.service';
import { DataCacheService, TTL_10_MIN } from '../cache/data-cache.service';
import { CACHE_KEY_ACTIVITY } from '../../../data/cache';


@Injectable({
    providedIn: 'root'
})
export class ActivityPageService {

    dataCache = new Map<string, DataCacheService<ActivityInterface>>;
    activity$ = new BehaviorSubject<ActivityInterface | undefined>(ACTIVITY_EMPTY);

    constructor( private supabaseService: SupabaseService) { }

    loadActivity(idActivity:number){
        const cacheKey =CACHE_KEY_ACTIVITY + idActivity;
        if(!this.dataCache.has(cacheKey)){
            const cache = new DataCacheService<ActivityInterface>(
                cacheKey,
                () =>this.supabaseService.getActivity(idActivity),
                TTL_10_MIN
            );
            this.dataCache.set(cacheKey, cache);
        }

        this.dataCache.get(cacheKey)!.get()
            .subscribe(chapter => this.activity$.next(chapter))
    }

    get activity(){
        return this.activity$
    }
}
