import { Component, Input } from '@angular/core';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../core/components/button/button.component';
import { CharapterPageService } from '../../core/service/charapter/charapter-page.service';
import { CommonModule } from '@angular/common';
import { CHAPTERS } from '../../data/chapters.data';
@Component({
  selector: 'app-chapter-page',
  standalone: true,
  imports: [RouterLink,ChapterComponent, ButtonComponent, CommonModule],
  templateUrl: './chapter-page.component.html',
  styleUrl: './chapter-page.component.css'
})
export class ChapterPageComponent {

  constructor(private servicePage: CharapterPageService){}


  @Input('chapterId') set id(chapterId: number) {
    this.servicePage.setPage(chapterId);
  };


  previousChapter(){
    this.servicePage.decrementPage()
  }

  nextChapter(){
    this.servicePage.incrementPage()
  }

  isPreviousAvailable(){
    return this.servicePage.getIsPreviousPageAvailable
  }

  isNextAvailable(){
    return this.servicePage.getIsNextPageAvailable
  }

  get pagePreviousButtonTitle(): string{
    return CHAPTERS[this.servicePage.getPageNumber.value - 1].title;
  }

  get pageNextButtonTitle(): string{
    return CHAPTERS[this.servicePage.getPageNumber.value + 1].title;
  }




}
