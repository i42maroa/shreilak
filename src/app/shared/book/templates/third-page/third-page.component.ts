import { Component } from '@angular/core';
import { BookPageComponent } from '../../page/page.component';
import { BookPageTitleComponent } from '../../title/title.component';

@Component({
    selector: 'app-third-page',
    imports: [BookPageTitleComponent, BookPageComponent],
    templateUrl: './third-page.component.html',
    styleUrl: './third-page.component.css'
})
export class ThirdPageComponent {

}
