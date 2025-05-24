import { Injectable } from '@angular/core';
import { DataCacheService, TTL_5_MIN } from '../cache/data-cache.service';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from '../supabase/supabase.service';
import {CACHE_KEY_RESOURCES } from '../../../data/cache';

@Injectable({
    providedIn: 'root'
})
export class ListResourcesService {

    private dataCache: DataCacheService<ResourceInterface[] | null>;
    private listChapters = new BehaviorSubject<ResourceInterface []| undefined | null>(undefined);

    constructor(private supabaseService: SupabaseService) {
        this.cleanList()
        this.dataCache = new DataCacheService(
            CACHE_KEY_RESOURCES,
            () => this.supabaseService.getResources(),
            TTL_5_MIN
        );

        this.dataCache.get()
            .subscribe(chapter => this.listChapters.next(chapter))
    }

    cleanList(){
        this.listChapters.next(undefined);
    }

    get getListChapters(): Observable<ResourceInterface[]| undefined | null>{
        return this.listChapters;
    }
}
