import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-fifth-page',
    standalone: true,
    imports: [RouterLink, TranslateModule],
    templateUrl: './fifth-page.component.html',
    styleUrl: './fifth-page.component.css'
})
export class FifthPageComponent {

}
