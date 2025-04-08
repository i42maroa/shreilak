import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAPTERS } from '../../../data/chapters.data';
import { TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from '../title/title.component';

@Component({
    selector: 'app-list-characters',
    imports: [RouterLink, TranslateModule, TitleComponent],
    templateUrl: './list-characters.component.html',
    styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

    chapters = CHAPTERS;
}
