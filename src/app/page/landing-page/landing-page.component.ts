import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { PagesTemplateModule } from '../templates/pages-template.module';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ ChapterComponent, LandingPageComponent, PagesTemplateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  @Input() numPage!:number;

}
