import { Component } from '@angular/core';
import { BookPageComponent } from '../../page/page.component';
import { BookPageTitleComponent } from '../../title/title.component';

@Component({
    selector: 'app-fourth-page',
    imports: [BookPageComponent, BookPageTitleComponent],
    templateUrl: './fourth-page.component.html',
    styleUrl: './fourth-page.component.css'
})
export class FourthPageComponent {

}
