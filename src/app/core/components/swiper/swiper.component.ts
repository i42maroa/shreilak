import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {register as registerSwipperElements} from 'swiper/element/bundle'
import { PagesTemplateModule } from '../book/pages-template.module';


registerSwipperElements();

@Component({
    selector: 'app-swiper',
    imports: [PagesTemplateModule],
    templateUrl: './swiper.component.html',
    styleUrl: './swiper.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent {
    constructor(){
    }

}
