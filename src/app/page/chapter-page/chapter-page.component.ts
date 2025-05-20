import { Component, Input } from '@angular/core';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { CharapterPageService } from '../../core/service/chapter/chapter-page.service';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../../core/components/buttons/buttons.component';
import { ButtonInterface } from '../../data/interface/button.interface';
import { LetterSSVGComponent } from '../../core/svg/letter-s/letter-s.component';
import { CHAPTER_PATH } from '../../app.routes';
import { NotFoundPageComponent } from '../not-found/not-found.component';

@Component({
    selector: 'app-chapter-page',
    imports: [ ChapterComponent, CommonModule, ButtonsComponent, LetterSSVGComponent, NotFoundPageComponent],
    templateUrl: './chapter-page.component.html',
    styleUrl: './chapter-page.component.css'
})
export class ChapterPageComponent {

    buttonChapterListConfig:ButtonInterface = {
        animation:true,
        url: `/${CHAPTER_PATH}`,
        text: 'NAVBAR.OPTIONS.CHAPTERS',
        type: 'GO_BACK'
    }

    buttonNextChapterConfig:ButtonInterface = {
        animation:true,
        url: `/${CHAPTER_PATH}`,
        text: '',
        type: 'GO_AHEAD'
    }

    @Input() set chapterId(chapterId: number) {
        this.servicePage.setChapter(chapterId);
    }

    constructor(private servicePage: CharapterPageService){}

    get chapter(){
        return this.servicePage.getChapter;
    }

    s(){
        this.chapter.subscribe(d => console.log(d))
    }

}
