import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../core/components/button/button.component';
import { SwiperComponent } from '../../core/components/swiper/swiper.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ChapterComponent, CommonModule, SwiperComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  toChapters(){
    return '/chapter';
  }
}
