import { Component, Input } from '@angular/core';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { ObjetivePageComponent } from '../objetive-page/objetive-page.component';
import { CharapterPageService } from '../../service/charapter/charapter-page.service';
import { CHAPTERS } from '../../../data/chapters.data';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [ObjetivePageComponent],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  chapter!: ChapterInterface;

  constructor(private service: CharapterPageService){
    this.service.pageNumber$.subscribe(p =>this.chapter = CHAPTERS[p]);
  }
}
