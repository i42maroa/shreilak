import { Component } from '@angular/core';
import { BookPageComponent } from '../../page/page.component';
import { BookPageTitleComponent } from '../../title/title.component';

@Component({
    selector: 'app-second-page',
    imports: [BookPageTitleComponent, BookPageComponent],
    templateUrl: './second-page.component.html',
    styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

}
