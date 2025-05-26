import { Component, Input } from '@angular/core';
import { ActivityComponent } from '../../shared/activity/activity.component';
import { ActivityPageService } from '../../core/service/activity/activity.service';
import { CommonModule } from '@angular/common';
import { LetterSSVGComponent } from '../../core/svg/letter-s/letter-s.component';
import { ButtonsComponent } from '../../core/components/buttons/buttons.component';
import { ButtonInterface } from '../../data/interface/button.interface';
import { CHAPTER_PATH } from '../../app.routes';
import { NotFoundPageComponent } from '../not-found/not-found.component';
import { NAVBAR_OPTION_CHAPTERS } from '../../data/navbar';
import { LoaderService } from '../../core/service/loader/loader.service';

@Component({
    selector: 'app-activity-page',
    imports: [ActivityComponent, CommonModule, LetterSSVGComponent, ButtonsComponent, CommonModule, NotFoundPageComponent],
    templateUrl: './activity-page.component.html',
    styleUrl: './activity-page.component.css'
})
export class ActivityPageComponent{

    buttonBackConfig: ButtonInterface ={
        animation:true,
        type: 'GO_BACK',
        url: `/${CHAPTER_PATH}`,
        text: NAVBAR_OPTION_CHAPTERS
    };

    @Input() set activityId(activityId: number) {
        this.activityService.loadActivity(activityId);
    }

    @Input() set chapterId(chapterId: number) {
        this.buttonBackConfig.url = `/${CHAPTER_PATH}/${chapterId}`
    }

    constructor(private activityService:ActivityPageService, private loadingService:LoaderService){
        this.activityService.activity.asObservable()
            .subscribe(activity => {
                if(activity && activity.objectives && activity.objectives.chapters && activity.objectives.chapters.id){
                    this.buttonBackConfig.url = `/${CHAPTER_PATH}/${activity.objectives.chapters.id}`;
                    const nameButton = activity.objectives.chapters.title?? "Back";
                    this.buttonBackConfig.text = nameButton;
                }
            });
    }

    get activity(){
        return this.activityService.activity
    }

    get isLoading(){
        return this.loadingService.isLoading;
    }
}
