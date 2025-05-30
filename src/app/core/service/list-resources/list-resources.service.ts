import { Injectable } from '@angular/core';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { BehaviorSubject, combineLatest, distinctUntilChanged, mergeMap, Observable } from 'rxjs';
import { SupabaseService } from '../supabase/supabase.service';
import { FilterService } from '../filter/filter.service';
import { PaginationService } from '../pagination/pagination.service';

@Injectable({
    providedIn: 'root'
})
export class ListResourcesService {

    private listChapters = new BehaviorSubject<ResourceInterface []| undefined | null>(undefined);

    constructor(private supabaseService:SupabaseService,
        private filterService: FilterService,
        private paginationService: PaginationService){

        combineLatest([
            this.filterService.filter,
            this.paginationService.currentPage
        ]).pipe(
            distinctUntilChanged(([prevFilter, prevPage], [currFilter, currPage]) =>
                prevPage === currPage && prevFilter.name === currFilter.name &&
                      JSON.stringify(prevFilter.types) === JSON.stringify(currFilter.types) &&
                      JSON.stringify(prevFilter.flags) === JSON.stringify(currFilter.flags)
            ),
            mergeMap(([filters, page]) => {
                this.cleanList();
                return this.supabaseService.getFilterResource(filters, page);
            }))
            .subscribe(resources => this.setResourceList(resources));
    }


    setResourceList(resourceList: ResourceInterface[] | null):void{
        this.listChapters.next(resourceList);
    }

    cleanList(): void{
        this.listChapters.next(undefined);
    }

    get getListChapters(): Observable<ResourceInterface[]| undefined | null>{
        return this.listChapters;
    }

}
