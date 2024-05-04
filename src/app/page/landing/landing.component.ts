import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ChapterComponent, LandingPageComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  numPage:number = 5;

toChapters(){
  this.numPage = 0;
}
  show(){
    this.numPage++;
  }
  unShow(){
    this.numPage--;
  }
  getPage(){
    return this.numPage % 6;
  }
}
