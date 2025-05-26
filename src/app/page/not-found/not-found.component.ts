import { Component } from '@angular/core';
import { NotFoundSVGComponent } from '../../core/svg/not-found/not-found.component';
import { ButtonsComponent } from '../../core/components/buttons/buttons.component';
import { ButtonInterface } from '../../data/interface/button.interface';
import { CHAPTER_PATH, HISTORY_PATH } from '../../app.routes';
import { NAVBAR_OPTION_CHAPTERS, NAVBAR_OPTION_HISTORY } from '../../data/navbar';

@Component({
    selector: 'app-not-found',
    imports: [NotFoundSVGComponent, ButtonsComponent],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css'
})
export class NotFoundPageComponent {

    buttonToHistoryConfig:ButtonInterface = {
        animation:true,
        url: `/${HISTORY_PATH}`,
        text: NAVBAR_OPTION_HISTORY,
        type: 'GO_BACK'
    }

    buttonToChaptersConfig:ButtonInterface = {
        animation:true,
        url: `/${CHAPTER_PATH}`,
        text: NAVBAR_OPTION_CHAPTERS,
        type: 'GO_BACK'
    }
}
