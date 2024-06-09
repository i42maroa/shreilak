import { Component } from '@angular/core';
import { BookPageComponent } from '../../page/page.component';
import { BookPageTitleComponent } from '../../title/title.component';

@Component({
    selector: 'app-first-page',
    standalone: true,
    imports: [BookPageTitleComponent, BookPageComponent],
    templateUrl: './first-page.component.html',
    styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

}
