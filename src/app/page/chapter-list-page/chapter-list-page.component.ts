import { Component } from '@angular/core';
import { SupabaseService } from '../../core/service/supabase/supabase.service';
import { Observable } from 'rxjs';
import { ChapterInterface } from '../../data/interface/chapter.interface';
import { CommonModule } from '@angular/common';
import { DataCacheService, TTL_10_MIN } from '../../core/service/cache/data-cache.service';
import { CACHE_KEY_CHAPTERS } from '../../data/cache';
import { TitleComponent } from '../../core/components/title/title.component';
import { ListCharactersComponent } from '../../shared/list-characters/list-characters.component';


@Component({
    selector: 'app-chapter-list-page',
    imports: [ListCharactersComponent, CommonModule, TitleComponent],
    templateUrl: './chapter-list-page.component.html',
    styleUrl: './chapter-list-page.component.css'
})
export class ChapterListComponent  {

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
