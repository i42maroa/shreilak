import { Component, Input } from '@angular/core';
import { ActivityComponent } from '../../core/components/activity/activity.component';
import { ActivityPageService } from '../../core/service/activity/activity.service';
import { CommonModule } from '@angular/common';
import { LetterSSVGComponent } from '../../core/svg/letter-s/letter-s.component';
import { ButtonsComponent } from '../../core/components/buttons/buttons.component';
import { ButtonInterface } from '../../data/interface/button.interface';
import { CHAPTER_PATH } from '../../app.routes';

@Component({
    selector: 'app-activity-page',
    imports: [ActivityComponent, CommonModule, LetterSSVGComponent, ButtonsComponent, CommonModule],
    templateUrl: './activity-page.component.html',
    styleUrl: './activity-page.component.css'
})
export class ActivityPageComponent{

    buttonBackConfig: ButtonInterface ={
        animation:true,
        type: 'GO_BACK',
        url: `/${CHAPTER_PATH}`,
        text: 'NAVBAR.OPTIONS.CHAPTERS'
    };

    @Input() set activityId(activityId: number) {
        this.activityService.loadActivity(activityId);
    }

    @Input() set chapterId(chapterId: number) {
        this.buttonBackConfig.url = `/${CHAPTER_PATH}/${chapterId}`
    }

    constructor(private activityService:ActivityPageService){}

    get activity(){
        return this.activityService.activity
    }
}
