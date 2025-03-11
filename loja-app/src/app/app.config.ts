import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import routes from "./app-routing.module"
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
