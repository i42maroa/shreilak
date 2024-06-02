import { Component } from '@angular/core';
import { InstagramComponentSvg } from '../../svg/instagram/instagram.component';
import { AntonioLogoComponentSvg } from '../../svg/antonio-logo/antonio-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [InstagramComponentSvg, AntonioLogoComponentSvg],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
