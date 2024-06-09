import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-book-page-title',
    standalone: true,
    imports: [TranslateModule, CommonModule],
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
})
export class BookPageTitleComponent {

    @Input() firstUpperLetter:boolean = false;
    @Input() text:string = "";
}
