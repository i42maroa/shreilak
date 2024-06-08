import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-shower',
    standalone: true,
    imports: [],
    templateUrl: './image-shower.component.html',
    styleUrl: './image-shower.component.css'
})
export class ImageShowerComponent {

    @Input() url:string | undefined;
    @Input() alt:string | undefined;
}
