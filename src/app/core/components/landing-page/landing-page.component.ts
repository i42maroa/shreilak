import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { ChapterComponent } from '../chapter/chapter.component';
import { PagesTemplateModule } from '../../../page/templates/pages-template.module';
import { HistoryPageService } from '../../service/history/history-page.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ ChapterComponent, LandingPageComponent, PagesTemplateModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageComponent {

  numPage$: Observable<number>;

   constructor(servicePage: HistoryPageService){
      this.numPage$ = servicePage.getPageNumber
  }

}
