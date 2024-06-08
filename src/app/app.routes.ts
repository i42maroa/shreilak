import { Routes } from '@angular/router';
import { LandingComponent } from './page/landing-history/landing.component';
import { ChapterPageComponent } from './page/chapter-page/chapter-page.component';
import { RessourcePageComponent } from './page/ressource-page/ressource-page.component';
import { LandingChapterComponent } from './page/landing-chapter/landing-chapter.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { NotFoundPageComponent } from './page/not-found/not-found.component';

export const routes: Routes = [

  { path: '',   redirectTo: 'history', pathMatch: 'full' },
  { path: 'history', component: LandingComponent },
  { path: 'chapter', component: LandingChapterComponent },
  { path: 'chapter/:chapterId', component: ChapterPageComponent },
  { path: 'ressource/:resourceId', component: RessourcePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent },
];
