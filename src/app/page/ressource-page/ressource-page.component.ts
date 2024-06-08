import { Component, Input } from '@angular/core';
import { ResourcePageComponent } from '../../core/components/resource-page/resource-page.component';
import { Router, RouterLink } from '@angular/router';
import { RessourceService } from '../../core/service/ressource/ressource.service';
import { CommonModule } from '@angular/common';
import { LetterSSVGComponent } from '../../core/svg/letter-s/letter-s.component';
import { ButtonsComponent } from '../../core/components/buttons/buttons.component';
import { ResourceInterface } from '../../data/interface/resource.interface';
import { ButtonInterface } from '../../data/interface/button.interface';
import { CHAPTERS } from '../../data/chapters.data';

@Component({
    selector: 'app-ressource-page',
    standalone: true,
    imports: [RouterLink, ResourcePageComponent, CommonModule, LetterSSVGComponent, ButtonsComponent, CommonModule],
    templateUrl: './ressource-page.component.html',
    styleUrl: './ressource-page.component.css'
})
export class RessourcePageComponent{

    buttonBackConfig: ButtonInterface ={
        animation:true,
        type: 'GO_BACK',
        url: `/chapter`,
        text: 'Capítulos'
    };


    @Input() set resourceId(resourceId: string) {
        this.ressourceService.loadRessource(resourceId);
    }

    constructor(private ressourceService:RessourceService,
        private router: Router,
        private ressourceService_:RessourceService){
        this.ressourceService.ressource.subscribe(this.handleChapterLoad);

        const pageNumber =  this.ressourceService_.previousChapter.value
        if(pageNumber != undefined){
            this.buttonBackConfig = {
                animation:true,
                type: 'GO_BACK',
                url: `/chapter/${CHAPTERS[pageNumber]}`,
                text: CHAPTERS[pageNumber].title
            };
        }
    }

    get ressource(){
        return this.ressourceService.ressource
    }

    handleChapterLoad(ressource:ResourceInterface | undefined){
        !ressource && this.router.navigate(['notFound']);
    }
}
