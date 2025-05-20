import { Component } from '@angular/core';
import { ListCharactersComponent } from '../../core/components/list-characters/list-characters.component';
import { SupabaseService } from '../../core/service/supabase/supabase.service';
import { Observable } from 'rxjs';
import { ChapterInterface } from '../../data/interface/chapter.interface';
import { CommonModule } from '@angular/common';
import { DataCacheService, TTL_10_MIN } from '../../core/service/cache/data-cache.service';
import { CACHE_KEY_CHAPTERS } from '../../data/cache';
import { TitleComponent } from '../../core/components/title/title.component';


@Component({
    selector: 'app-landing-chapter',
    imports: [ListCharactersComponent, CommonModule, TitleComponent],
    templateUrl: './landing-chapter.component.html',
    styleUrl: './landing-chapter.component.css'
})
export class LandingChapterComponent  {

    dataCache:DataCacheService<ChapterInterface[]| null>;

    constructor(private supabaseService: SupabaseService){
        this.dataCache = new DataCacheService(
            CACHE_KEY_CHAPTERS,
            () => this.supabaseService.getChapters(),
            TTL_10_MIN
        );
    }

    get chapters(): Observable<ChapterInterface[]| null>{
        return this.dataCache.get();
    }
}
