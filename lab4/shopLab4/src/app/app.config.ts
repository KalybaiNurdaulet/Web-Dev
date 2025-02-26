import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes'; // Assuming you have an app.routes.ts file

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),       // Configure application-wide routing
    provideHttpClient(),      // Configure the HTTP client for API calls
    provideAnimations()       // Enable animations in the application
    // Add any other global providers here (e.g., services, state management)
  ]
};