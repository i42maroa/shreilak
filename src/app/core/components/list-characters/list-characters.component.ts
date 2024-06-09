import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAPTERS } from '../../../data/chapters.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-list-characters',
    standalone: true,
    imports: [RouterLink, TranslateModule],
    templateUrl: './list-characters.component.html',
    styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

    chapters = CHAPTERS;
}
