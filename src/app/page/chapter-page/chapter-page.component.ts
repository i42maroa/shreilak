import { Component, Input } from '@angular/core';
import { CHAPTERS } from '../../data/chapters.data';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
@Component({
  selector: 'app-chapter-page',
  standalone: true,
  imports: [ChapterComponent],
  templateUrl: './chapter-page.component.html',
  styleUrl: './chapter-page.component.css'
})
export class ChapterPageComponent {

  chapterId = "";

  @Input('chapterId') set id(chapterId: string) {
    this.chapterId = chapterId;
  };


  get chapter(){
    return  CHAPTERS[+this.chapterId];
  }
}
