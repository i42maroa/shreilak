import { Component, Input } from '@angular/core';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { ObjetivePageComponent } from '../objetive-page/objetive-page.component';
import { CharapterPageService } from '../../service/charapter/charapter-page.service';
import { CHAPTERS } from '../../../data/chapters.data';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LetterSComponentSvg } from '../../svg/letter-s/letter-s.component';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [ObjetivePageComponent, CommonModule, LetterSComponentSvg],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  chapter$ = new BehaviorSubject<ChapterInterface|undefined>(undefined);

  constructor(private service: CharapterPageService){
    this.service.pageNumber$.subscribe(p =>this.chapter$.next(CHAPTERS[p]));
  }

}
