import { Component } from '@angular/core';
import { InstagramSVGComponent } from '../../svg/instagram/instagram.component';
import { AntonioLogoSVGComponent } from '../../svg/antonio-logo/antonio-logo.component';

@Component({
    selector: 'app-footer',
    imports: [InstagramSVGComponent, AntonioLogoSVGComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {

}
