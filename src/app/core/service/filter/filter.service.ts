import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DEFAULT_RESOURCES_FILTERS, FilterResourceInterface } from '../../../data/interface/filters.interface';

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    private filter$ = new BehaviorSubject<FilterResourceInterface>(DEFAULT_RESOURCES_FILTERS);

    setFilter(filter: FilterResourceInterface) {
        this.filter$.next(filter);
    }

    get filter():Observable<FilterResourceInterface>{
        return this.filter$.asObservable();
    }
}
