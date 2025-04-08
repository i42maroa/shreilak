import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CHAPTER_PATH } from '../../../../app.routes';

@Component({
    selector: 'app-aid-button',
    imports: [RouterLink, TranslateModule],
    templateUrl: './aid-button.component.html',
    styleUrl: './aid-button.component.css'
})
export class AidButtonComponent {
    get toChapters(){
        return `/${CHAPTER_PATH}`
    }
}
