import { Component, Input } from '@angular/core';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { RouterLink } from '@angular/router';
import { CharapterPageService } from '../../core/service/charapter/charapter-page.service';
import { CommonModule } from '@angular/common';
import { CHAPTERS } from '../../data/chapters.data';
import { ButtonsComponent } from '../../core/components/buttons/buttons.component';
import { ButtonInterface } from '../../data/interface/button.interface';
import { LetterSSVGComponent } from '../../core/svg/letter-s/letter-s.component';
import { CHAPTER_PATH } from '../../app.routes';

@Component({
    selector: 'app-chapter-page',
    standalone: true,
    imports: [RouterLink,ChapterComponent, CommonModule, ButtonsComponent, LetterSSVGComponent],
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
        this.servicePage.setPage(chapterId);
    }

    constructor(private servicePage: CharapterPageService){
        this.servicePage.getPageNumber.subscribe(page => {
            if (this.servicePage.getIsNextPageAvailable.value){
                const nextChapterNumber = +page + 1;
                const title = CHAPTERS[nextChapterNumber].title;
                this.buttonNextChapterConfig.text = title;
                this.buttonNextChapterConfig.url = `/${CHAPTER_PATH}/${nextChapterNumber}`;
            }
        })
    }

    nextChapter(){
        this.servicePage.incrementPage()
    }

    isNextAvailable(){
        return this.servicePage.getIsNextPageAvailable
    }
}
