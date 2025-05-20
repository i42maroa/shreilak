import { Component, Input } from '@angular/core';
import { ObjetiveComponent } from '../objetive/objetive.component';
import { CommonModule } from '@angular/common';
import { ChapterInterface } from '../../../data/interface/chapter.interface';

@Component({
    selector: 'app-chapter',
    imports: [ObjetiveComponent, CommonModule],
    templateUrl: './chapter.component.html',
    styleUrl: './chapter.component.css'
})
export class ChapterComponent {

    @Input() chapter: ChapterInterface | undefined;
}
