import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-title',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
})
export class TitleComponent {

    @Input() text!:string;
    @Input() index?:number | undefined;
}
