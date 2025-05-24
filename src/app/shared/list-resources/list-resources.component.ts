import { Component, Input } from '@angular/core';
import { ListResourcesSkeletonComponent } from './list-resources-skeleton/list-resources-skeleton.component';
import { CommonModule } from '@angular/common';
import { ResourceInterface } from '../../data/interface/resource.interface';
import { ResourceComponent } from '../resource/resource.component';

@Component({
    selector: 'app-list-resources',
    imports: [ListResourcesSkeletonComponent, CommonModule, ResourceComponent],
    templateUrl: './list-resources.component.html',
    styleUrl: './list-resources.component.css'
})
export class ListResourcesComponent {

    @Input() resources: ResourceInterface[] | undefined | null = [];
}
