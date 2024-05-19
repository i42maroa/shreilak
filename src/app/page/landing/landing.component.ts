import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { HistoryPageService } from '../../core/service/history/history-page.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ChapterComponent, LandingPageComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  @Input('pageId') set id(pageId: number) {
    this.servicePage.setPage(pageId)
  };

   constructor(
    private servicePage: HistoryPageService){}

  toChapters(){
    this.servicePage.toListCharacters()
  }
  show(){
    this.servicePage.incrementPage()
  }
  unShow(){
    this.servicePage.decrementPage()
  }

  isPreviousAvailable(){
    return this.servicePage.getIsPreviousPageAvailable
  }

  isNextAvailable(){
    return this.servicePage.getIsNextPageAvailable
  }

  getPageNumber(){
    return this.servicePage.getPageNumber
  }
}
