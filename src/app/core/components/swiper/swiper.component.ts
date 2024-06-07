import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {register as registerSwipperElements} from 'swiper/element/bundle'
import { PagesTemplateModule } from '../../../page/templates/pages-template.module';


registerSwipperElements();

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [PagesTemplateModule],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
  constructor(){
  }

}
