import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TitleComponent } from '../../core/components/title/title.component';
import { ObjectiveInteface } from '../../data/interface/objective.interface';
import { ACTIVITY_PATH, CHAPTER_PATH } from '../../app.routes';
import { ActivityInterface } from '../../data/interface/activity.interface';
import { SCROLL_POSITION_CHAPTER } from '../../page/chapter-page/chapter-page.component';

@Component({
    selector: 'app-objetive',
    imports: [ TitleComponent],
    templateUrl: './objetive.component.html',
    styleUrl: './objetive.component.css'
})
export class ObjetiveComponent {
    @Input() objective!: ObjectiveInteface;
    @Input() index!:number;

    constructor(private router:Router){}

    goToResource(activity:ActivityInterface):void{
        const scrollY = window.scrollY;
        sessionStorage.setItem(SCROLL_POSITION_CHAPTER, scrollY.toString());
        this.router.navigate([`/${CHAPTER_PATH}/${this.objective.id_chapter}/${ACTIVITY_PATH}/${activity.id}`]);
    }
}
