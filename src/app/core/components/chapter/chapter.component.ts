import { Component, Input } from '@angular/core';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { ObjetivePageComponent } from '../objetive-page/objetive-page.component';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [ObjetivePageComponent],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  @Input() chapter!: ChapterInterface;

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
