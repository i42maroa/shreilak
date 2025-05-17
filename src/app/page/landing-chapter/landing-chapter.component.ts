import { Component, OnInit } from '@angular/core';
import { ListCharactersComponent } from '../../core/components/list-characters/list-characters.component';
import { SupabaseService } from '../../core/service/supabase/supabase.service';
import { BehaviorSubject } from 'rxjs';
import { ChapterInterface } from '../../data/interface/chapter.interface';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-landing-chapter',
    imports: [ListCharactersComponent, CommonModule],
    templateUrl: './landing-chapter.component.html',
    styleUrl: './landing-chapter.component.css'
})
export class LandingChapterComponent implements OnInit {

    chapters$ =  new BehaviorSubject<ChapterInterface[]>([]);

    constructor(private supabaseService: SupabaseService){}

    ngOnInit(): void {
        this.supabaseService.getChapters()
            .subscribe(chapters => this.chapters$.next(chapters))
    }
}
