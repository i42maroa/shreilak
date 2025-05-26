import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChapterInterface } from '../../data/interface/chapter.interface';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../core/components/title/title.component';
import { ListChaptersComponent } from '../../shared/list-chapters/list-characters.component';
import { ListChaptersService } from '../../core/service/list-chapters/list-chapters.service';


@Component({
    selector: 'app-chapter-list-page',
    imports: [ListChaptersComponent, CommonModule, TitleComponent],
    templateUrl: './chapter-list-page.component.html',
    styleUrl: './chapter-list-page.component.css'
})
export class ChapterListComponent  {

    constructor(private chapterListService:ListChaptersService){}

    get chapters(): Observable<ChapterInterface[]| undefined| null>{
        return this.chapterListService.getListChapters;
    }
}
