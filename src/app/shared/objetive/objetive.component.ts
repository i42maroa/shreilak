import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../core/components/title/title.component';
import { ObjectiveInteface } from '../../data/interface/objective.interface';
import { ActivityInterface } from '../../data/interface/activity.interface';
import { ACTIVITY_PATH, CHAPTER_PATH } from '../../app.routes';

@Component({
    selector: 'app-objetive',
    imports: [ RouterLink, TitleComponent],
    templateUrl: './objetive.component.html',
    styleUrl: './objetive.component.css'
})
export class ObjetiveComponent {
    @Input() objective!: ObjectiveInteface;
    @Input() index!:number;

    show = false;

    showDetail(){
        this.show = true;
    }

    getRouter(activity:ActivityInterface){
        return `/${CHAPTER_PATH}/${this.objective.id_chapter}/${ACTIVITY_PATH}/${activity.id}`;
    }
}
