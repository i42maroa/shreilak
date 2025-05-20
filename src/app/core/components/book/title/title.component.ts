import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-book-page-title',
    imports: [CommonModule],
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
})
export class BookPageTitleComponent {

    @Input() firstUpperLetter:boolean = false;
    @Input() text:string = "";
}
