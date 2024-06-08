import { Component } from '@angular/core';
import { LetterSSVGComponent } from '../../../core/svg/letter-s/letter-s.component';

@Component({
    selector: 'app-first-page',
    standalone: true,
    imports: [LetterSSVGComponent],
    templateUrl: './first-page.component.html',
    styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

}
