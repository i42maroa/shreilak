import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAPTER_PATH } from '../../../../app.routes';

@Component({
    selector: 'app-aid-button',
    imports: [RouterLink],
    templateUrl: './aid-button.component.html',
    styleUrl: './aid-button.component.css'
})
export class AidButtonComponent {
    get toChapters(){
        return `/${CHAPTER_PATH}`
    }
}
