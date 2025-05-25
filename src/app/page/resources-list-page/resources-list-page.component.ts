import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceInterface } from '../../data/interface/resource.interface';
import { ListResourcesService } from '../../core/service/list-resources/list-resources.service';
import { ListResourcesComponent } from '../../shared/list-resources/list-resources.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../core/components/title/title.component';
import { FilterComponent } from '../../core/components/filter/filter.component';

@Component({
    selector: 'app-resources-list-page',
    imports: [ListResourcesComponent, CommonModule, TitleComponent, FilterComponent],
    templateUrl: './resources-list-page.component.html',
    styleUrl: './resources-list-page.component.css'
})
export class ResourcesListPageComponent {
    constructor(private resourcesListService:ListResourcesService){}

    get resources(): Observable<ResourceInterface[]| undefined| null>{
        return this.resourcesListService.getListChapters;
    }
}
