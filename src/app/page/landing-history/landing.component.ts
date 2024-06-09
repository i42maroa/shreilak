import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from '../../core/components/swiper/swiper.component';
import { LetterSSVGComponent } from '../../core/svg/letter-s/letter-s.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [RouterLink, ChapterComponent, CommonModule, SwiperComponent, LetterSSVGComponent, TranslateModule],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css'
})
export class LandingComponent {
    text:string= ""
}
