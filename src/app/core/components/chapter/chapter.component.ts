import { Component, Input } from '@angular/core';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { ObjetivePageComponent } from '../objetive-page/objetive-page.component';
import { FROZEN_CHAPTER } from '../../../data/chapters/frozen.data';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [ObjetivePageComponent],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  @Input() chapter!: ChapterInterface;

}
