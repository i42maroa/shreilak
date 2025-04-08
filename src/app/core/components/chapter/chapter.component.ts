import { Component } from '@angular/core';
import { ObjetivePageComponent } from '../objetive-page/objetive-page.component';
import { CharapterPageService } from '../../service/charapter/charapter-page.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-chapter',
    imports: [ObjetivePageComponent, CommonModule, TranslateModule],
    templateUrl: './chapter.component.html',
    styleUrl: './chapter.component.css'
})
export class ChapterComponent {

    constructor(private service: CharapterPageService ){ }

    get chapter(){
        return this.service.getChapter;
    }
}
