import { Component } from '@angular/core';
import { ListCharactersComponent } from '../../core/components/list-characters/list-characters.component';


@Component({
    selector: 'app-landing-chapter',
    imports: [ListCharactersComponent],
    templateUrl: './landing-chapter.component.html',
    styleUrl: './landing-chapter.component.css'
})
export class LandingChapterComponent {
}
