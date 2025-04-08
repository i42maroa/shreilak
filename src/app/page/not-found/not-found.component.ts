import { Component } from '@angular/core';
import { NotFoundSVGComponent } from '../../core/svg/not-found/not-found.component';
import { RouterLink } from '@angular/router';
import { ButtonsComponent } from '../../core/components/buttons/buttons.component';
import { ButtonInterface } from '../../data/interface/button.interface';
import { CHAPTER_PATH, HISTORY_PATH } from '../../app.routes';

@Component({
    selector: 'app-not-found',
    imports: [NotFoundSVGComponent, RouterLink, ButtonsComponent],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css'
})
export class NotFoundPageComponent {

    buttonToHistoryConfig:ButtonInterface = {
        animation:true,
        url: `/${HISTORY_PATH}`,
        text: 'NAVBAR.OPTIONS.HISTORY',
        type: 'GO_BACK'
    }

    buttonToChaptersConfig:ButtonInterface = {
        animation:true,
        url: `/${CHAPTER_PATH}`,
        text: 'NAVBAR.OPTIONS.CHAPTERS',
        type: 'GO_BACK'
    }
}
