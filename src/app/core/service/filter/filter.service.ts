import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_RESOURCES_FILTERS, FilterResourceInterface } from '../../../data/interface/filters.interface';
import { SupabaseService } from '../supabase/supabase.service';
import { ListResourcesService } from '../list-resources/list-resources.service';

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    private filter$ = new BehaviorSubject<FilterResourceInterface>(DEFAULT_RESOURCES_FILTERS);


    constructor(private supabaseService:SupabaseService,
        private resourcesListService:ListResourcesService) {}

    setFilter(filter: FilterResourceInterface) {
        this.filter$.next(filter);
        this.supabaseService.getFilterResource(this.filter)
            .subscribe(resources => this.resourcesListService.setResourceList(resources))
    }

    get filter():FilterResourceInterface{
        return this.filter$.value;
    }
}
