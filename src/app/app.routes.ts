import { Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';
import { ChapterPageComponent } from './page/chapter-page/chapter-page.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'chapter/:chapterId', component: ChapterPageComponent }
];
