import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-second-page',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './second-page.component.html',
    styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

}
