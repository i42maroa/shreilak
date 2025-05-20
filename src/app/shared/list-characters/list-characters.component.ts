import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChapterInterface } from '../../data/interface/chapter.interface';

@Component({
    selector: 'app-list-characters',
    imports: [RouterLink, CommonModule],
    templateUrl: './list-characters.component.html',
    styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

    @Input() chapters: ChapterInterface[] | null = [];
}
