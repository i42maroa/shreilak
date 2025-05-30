import { Injectable } from '@angular/core';
import { DataCacheService, TTL_30_MIN } from '../cache/data-cache.service';
import { FlagInterface } from '../../../data/interface/flag.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from '../supabase/supabase.service';
import {  CACHE_KEY_FLAG } from '../../../data/cache';

@Injectable({
    providedIn: 'root'
})
export class FlagService {

    private dataCache: DataCacheService<FlagInterface[] | null>;
    private listFlags = new BehaviorSubject<FlagInterface[]| undefined | null>(undefined);

    constructor(private supabaseService: SupabaseService) {
        this.cleanList()
        this.dataCache = new DataCacheService(
            CACHE_KEY_FLAG,
            () => this.supabaseService.getFlags(),
            TTL_30_MIN
        );

        this.dataCache.get()
            .subscribe(flags => this.listFlags.next(flags))
    }

    cleanList(){
        this.listFlags.next(undefined);
    }

    get getListFlags(): Observable<FlagInterface[]| undefined | null>{
        return this.listFlags;
    }
}
