import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

//Fix when change page go to the top
const inMemoryScrollingFeature:InMemoryScrollingFeature = withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }
  );

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature, withComponentInputBinding())]
};
