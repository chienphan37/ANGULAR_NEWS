import {ApplicationConfig} from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {tokenInterceptor} from "./interceptor/token.interceptor";
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
    withPreloading(PreloadAllModules),
      withRouterConfig(
        {
          onSameUrlNavigation:"reload"
        }
      ),
      // withDebugTracing()
  ),
     provideHttpClient(
       withInterceptors([tokenInterceptor])
     ),
    provideAnimations()
  ]
};
