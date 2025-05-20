import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-list-characters',
    imports: [RouterLink, CommonModule],
    templateUrl: './list-characters.component.html',
    styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

    @Input() chapters: ChapterInterface[] | null = [];
}
