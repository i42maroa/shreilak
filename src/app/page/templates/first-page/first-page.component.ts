import { Component } from '@angular/core';
import { LetterSComponentSvg } from '../../../core/svg/letter-s/letter-s.component';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [LetterSComponentSvg],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

}
