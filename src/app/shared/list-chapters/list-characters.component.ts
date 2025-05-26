import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChapterInterface } from '../../data/interface/chapter.interface';
import { ListChaptersSkeletonComponent } from './list-chapters-skeleton/list-chapters-skeleton.component';

@Component({
    selector: 'app-list-chapters',
    imports: [RouterLink, CommonModule, ListChaptersSkeletonComponent],
    templateUrl: './list-chapters.component.html',
    styleUrl: './list-chapters.component.css'
})
export class ListChaptersComponent {

    @Input() chapters: ChapterInterface[] | undefined | null = [];
}
