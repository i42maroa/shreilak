import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { HistoryPageService } from '../../core/service/history/history-page.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../core/components/button/button.component';
import { LandingPageComponent } from '../../core/components/landing-page/landing-page.component';
import { SwiperComponent } from '../../core/components/swiper/swiper.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ChapterComponent, LandingPageComponent, CommonModule, SwiperComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

   constructor(
    private servicePage: HistoryPageService){}

  toChapters(){
    this.servicePage.toListCharacters()
    return '/chapter';
  }
}
