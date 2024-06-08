import { Component } from '@angular/core';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { ObjetivePageComponent } from '../objetive-page/objetive-page.component';
import { CharapterPageService } from '../../service/charapter/charapter-page.service';
import { CHAPTERS } from '../../../data/chapters.data';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RessourceService } from '../../service/ressource/ressource.service';

@Component({
    selector: 'app-chapter',
    standalone: true,
    imports: [ObjetivePageComponent, CommonModule],
    templateUrl: './chapter.component.html',
    styleUrl: './chapter.component.css'
})
export class ChapterComponent {

    chapter$ = new BehaviorSubject<ChapterInterface|undefined>(undefined);

    constructor(private service: CharapterPageService,
        private ressourceService_: RessourceService
    ){
        this.service.pageNumber$.subscribe(p => {
            this.chapter$.next(CHAPTERS[p]);
            this.ressourceService_.setChapterPrevious(p);
        });
    }

}
