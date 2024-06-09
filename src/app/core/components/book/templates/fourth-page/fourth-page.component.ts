import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BookPageComponent } from '../../page/page.component';
import { CHAPTER_PATH } from '../../../../../app.routes';
import { BookPageTitleComponent } from '../../title/title.component';

@Component({
    selector: 'app-fourth-page',
    standalone: true,
    imports: [RouterLink, TranslateModule, BookPageComponent, BookPageTitleComponent],
    templateUrl: './fourth-page.component.html',
    styleUrl: './fourth-page.component.css'
})
export class FourthPageComponent {

    get toChapters(){
        return `/${CHAPTER_PATH}`
    }
}
