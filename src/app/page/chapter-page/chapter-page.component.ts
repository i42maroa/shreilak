import { Component, Input } from '@angular/core';
import { ChapterComponent } from '../../core/components/chapter/chapter.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../core/components/button/button.component';
import { CharapterPageService } from '../../core/service/charapter/charapter-page.service';
@Component({
  selector: 'app-chapter-page',
  standalone: true,
  imports: [RouterLink,ChapterComponent, ButtonComponent],
  templateUrl: './chapter-page.component.html',
  styleUrl: './chapter-page.component.css'
})
export class ChapterPageComponent {

  constructor(private service: CharapterPageService){}


  @Input('chapterId') set id(chapterId: number) {
    this.service.setPage(chapterId);
  };



  previousChapter(){
    this.service.decrementPage()
  }

  nextChapter(){
    this.service.incrementPage()
  }
}
