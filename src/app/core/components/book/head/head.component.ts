import { Component } from '@angular/core';
import { LetterSSVGComponent } from '../../../svg/letter-s/letter-s.component';

@Component({
    selector: 'app-book-header-page',
    standalone: true,
    imports: [LetterSSVGComponent],
    templateUrl: './head.component.html',
    styleUrl: './head.component.css'
})
export class BookHeaderPageComponent {

}
