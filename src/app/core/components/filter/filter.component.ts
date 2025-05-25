import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from '../../service/filter/filter.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FilterResourceInterface, RESOURCE_TYPES_FILTER } from '../../../data/interface/filters.interface';

const UMBRAL_TO_SEARCH = 2;

@Component({
    selector: 'app-filter',
    imports: [ReactiveFormsModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {

    form!: FormGroup;
    formTypes = RESOURCE_TYPES_FILTER;

    constructor(private fb:FormBuilder, private filterService: FilterService) {
        this.form = this.fb.group({
            name: [''],
            types: [[]],
        });

        this.form.valueChanges
            .pipe(debounceTime(300), distinctUntilChanged<FilterResourceInterface>((prev, curr) =>{
                const nameWithtChanges =  prev.name !== curr.name;
                if(nameWithtChanges && ( prev.name.length >= UMBRAL_TO_SEARCH || curr.name.length >= UMBRAL_TO_SEARCH)){
                    return false;
                }

                const typesWithoutChanges = prev.types.length === curr.types.length &&
                  prev.types.every((t, i) => t === curr.types[i]);

                return typesWithoutChanges;
            }))
            .subscribe((val:FilterResourceInterface) => {
                const name = val.name?.trim() || '';
                const types = val.types || [];

                const nameOkOfSearch = name.length >= UMBRAL_TO_SEARCH;

                if (nameOkOfSearch) {
                    this.filterService.setFilter({ name, types });
                }
                else{
                    this.filterService.setFilter({ name:'', types });
                }
            });
    }

    ngOnInit(): void {
        const filter = this.filterService.filter;
        this.form.patchValue({...filter})
    }
}
