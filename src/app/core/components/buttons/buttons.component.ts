import { Component, Input } from '@angular/core';
import { ButtonInterface } from '../../../data/interface/button.interface';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-buttons',
    standalone: true,
    imports: [RouterLink, TranslateModule],
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

    @Input() buttonConfig:ButtonInterface | undefined | null;

}
