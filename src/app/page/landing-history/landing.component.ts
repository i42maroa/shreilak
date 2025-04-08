import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from '../../core/components/swiper/swiper.component';
import { LetterSSVGComponent } from '../../core/svg/letter-s/letter-s.component';
import { TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from '../../core/components/title/title.component';
import { AidButtonComponent } from '../../core/components/buttons/aid-button/fifth-page.component';


@Component({
    selector: 'app-landing',
    imports: [AidButtonComponent, CommonModule, SwiperComponent, LetterSSVGComponent, TitleComponent, TranslateModule],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css'
})
export class LandingComponent {
    text:string= ""
}
