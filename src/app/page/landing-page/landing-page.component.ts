import { Component, Input } from '@angular/core';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { PagesTemplateModule } from '../templates/pages-template.module';
import { HistoryPageService } from '../../core/service/history/history-page.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ ChapterComponent, LandingPageComponent, PagesTemplateModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  numPage$: Observable<number>;


   constructor(servicePage: HistoryPageService){
      this.numPage$ = servicePage.getPageNumber
  }

}
