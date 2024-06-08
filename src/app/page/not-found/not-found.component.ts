import { Component } from '@angular/core';
import { NotFoundSVGComponent } from '../../core/svg/not-found/not-found.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [NotFoundSVGComponent, RouterLink],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css'
})
export class NotFoundPageComponent {

}
