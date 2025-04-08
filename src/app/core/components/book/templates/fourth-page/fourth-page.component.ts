import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BookPageComponent } from '../../page/page.component';
import { BookPageTitleComponent } from '../../title/title.component';

@Component({
    selector: 'app-fourth-page',
    imports: [TranslateModule, BookPageComponent, BookPageTitleComponent],
    templateUrl: './fourth-page.component.html',
    styleUrl: './fourth-page.component.css'
})
export class FourthPageComponent {

}
