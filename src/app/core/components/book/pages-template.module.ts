import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './templates/first-page/first-page.component';
import { SecondPageComponent } from './templates/second-page/second-page.component';
import { ThirdPageComponent } from './templates/third-page/third-page.component';
import { FourthPageComponent } from './templates/fourth-page/fourth-page.component';
import { BookHeaderPageComponent } from './head/head.component';
import { FifthPageComponent } from './templates/fifth-page/fifth-page.component';



@NgModule({
    exports: [
        BookHeaderPageComponent,
        FirstPageComponent,
        SecondPageComponent,
        ThirdPageComponent,
        FourthPageComponent,
        FifthPageComponent],
    imports: [
        CommonModule,
        BookHeaderPageComponent,
        FirstPageComponent,
        SecondPageComponent,
        ThirdPageComponent,
        FourthPageComponent,
        FifthPageComponent
    ]
})
export class PagesTemplateModule { }
