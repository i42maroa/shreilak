import { Component, Input } from '@angular/core';
import { ResourceInterface } from '../../data/interface/resource.interface';
import { CommonModule } from '@angular/common';
import { ClockSVGComponent } from '../../core/svg/clock/clock.component';

@Component({
    selector: 'app-resource',
    imports: [CommonModule, ClockSVGComponent],
    templateUrl: './resource.component.html',
    styleUrl: './resource.component.css'
})
export class ResourceComponent {

    @Input() resource:ResourceInterface | undefined;


    getBackgroundClass() {
        if(this.resource){
            return {
                'pdfBk': this.resource.type === 'PDF',
                'youtubeBk': this.resource.type === 'YOUTUBE',
                'geniallyBk': this.resource.type === 'GENIALLY',
                'lyricBk': this.resource.type === 'LIRYC'
            };

        }
        return{};
    }

    getColorClass() {
        if(this.resource){
            return {
                'pdf': this.resource.type === 'PDF',
                'youtube': this.resource.type === 'YOUTUBE',
                'genially': this.resource.type === 'GENIALLY',
                'lyric': this.resource.type === 'LIRYC'
            };

        }
        return{};
    }

}
