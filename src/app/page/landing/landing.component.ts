import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ChapterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  numPage:number = 6;

toChapters(){
  this.numPage = 0;
}
  show(){
    this.numPage++;
  }
  unShow(){
    this.numPage--;
  }
  onDragOver(event: DragEvent){
      console.log(event)
  }

}
