import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from '../../service/filter/filter.service';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { DEFAULT_RESOURCES_TYPE, FilterResourceInterface, RESOURCE_TYPES_FILTER } from '../../../data/interface/filters.interface';
import { PaginationService } from '../../service/pagination/pagination.service';
import { MultiselectComponent } from '../input/multiselect/multiselect.component';
import { FlagService } from '../../service/flag/flag.service';
import { CommonModule } from '@angular/common';
import { ArrowDownSVGComponent } from '../../svg/arrow-down/arrow-down.component';

const UMBRAL_TO_SEARCH = 2;

@Component({
    selector: 'app-filter',
    imports: [ReactiveFormsModule, MultiselectComponent, CommonModule, ArrowDownSVGComponent],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {

    form!: FormGroup;
    formTypes = RESOURCE_TYPES_FILTER;
    options = DEFAULT_RESOURCES_TYPE;

    showAdditionalFilters  = false;

    constructor(private fb:FormBuilder, private filterService: FilterService, private paginationService: PaginationService,
        private flagService:FlagService
    ) {
        this.form = this.fb.group({
            name: [''],
            types: [[]],
            flags: [[]],
        });

        this.form.valueChanges
            .pipe(debounceTime(300), distinctUntilChanged<FilterResourceInterface>((prev, curr) =>{
                const nameWithtChanges =  prev.name !== curr.name;
                if(nameWithtChanges && ( prev.name.length >= UMBRAL_TO_SEARCH || curr.name.length >= UMBRAL_TO_SEARCH)){
                    return false;
                }
                const typesWithoutChanges = prev.types.length === curr.types.length &&
                  prev.types.every((t, i) => t === curr.types[i]);

                const flagsWithoutChanges = prev.flags.length === curr.flags.length &&
                  prev.flags.every((t, i) => t === curr.flags[i]);

                return typesWithoutChanges && flagsWithoutChanges;
            }))
            .subscribe((val:FilterResourceInterface) => {
                const name = val.name?.trim() || '';
                const types = val.types || [];
                const flags = val.flags || [];

                const nameOkOfSearch = name.length >= UMBRAL_TO_SEARCH;

                if (nameOkOfSearch) {
                    this.filterService.setFilter({ name, types, flags });
                }
                else{
                    this.filterService.setFilter({ name:'', types, flags });
                }

                this.paginationService.reset();
            });
    }

    ngOnInit(): void {
        const filter = this.filterService.filter;
        this.form.patchValue({...filter})
    }

    toggleShowMoreFilters(){
        this.showAdditionalFilters = !this.showAdditionalFilters;
    }

    get flags(): Observable<string[]>{
        return this.flagService.getListFlags
            .pipe(map(flags => (flags ?? []).map(flag => flag.name)));
    }
}
