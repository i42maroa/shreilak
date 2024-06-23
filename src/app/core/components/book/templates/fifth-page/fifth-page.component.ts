import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CHAPTER_PATH } from '../../../../../app.routes';

@Component({
    selector: 'app-fifth-page',
    standalone: true,
    imports: [RouterLink, TranslateModule],
    templateUrl: './fifth-page.component.html',
    styleUrl: './fifth-page.component.css'
})
export class FifthPageComponent {
    get toChapters(){
        return `/${CHAPTER_PATH}`
    }
}
