import { Component } from '@angular/core';
import { ObjetiveComponent } from '../objetive/objetive.component';
import { CharapterPageService } from '../../service/chapter/chapter-page.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-chapter',
    imports: [ObjetiveComponent, CommonModule, TranslateModule],
    templateUrl: './chapter.component.html',
    styleUrl: './chapter.component.css'
})
export class ChapterComponent {

    constructor(private service: CharapterPageService ){ }

    get chapter(){
        return this.service.getChapter;
    }
}
