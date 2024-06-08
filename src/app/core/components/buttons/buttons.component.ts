import { Component, Input } from '@angular/core';
import { ButtonInterface } from '../../../data/interface/button.interface';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-buttons',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

    @Input() buttonConfig:ButtonInterface | undefined | null;

}
