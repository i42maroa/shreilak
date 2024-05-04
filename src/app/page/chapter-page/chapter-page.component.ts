import { Component, Input } from '@angular/core';
import { CHAPTERS } from '../../data/chapters.data';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-chapter-page',
  standalone: true,
  imports: [RouterLink,ChapterComponent],
  templateUrl: './chapter-page.component.html',
  styleUrl: './chapter-page.component.css'
})
export class ChapterPageComponent {

  chapterId = 0;

  @Input('chapterId') set id(chapterId: number) {
    this.chapterId = chapterId;
  };


  get chapter(){
    return  CHAPTERS[+this.chapterId];
  }

  behaviorChapter(){
    const pos = this.chapterId - 1
    return `/chapter/${pos}`;
  }

  nextChapter(){
    const pos = +this.chapterId + 1
    return `/chapter/${pos}`;
  }
}
