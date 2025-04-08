import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShreilakTitleSVGComponent } from '../../svg/shreilak-title/shreilak-title.component';

@Component({
    selector: 'app-header',
    imports: [RouterLink, ShreilakTitleSVGComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

}
