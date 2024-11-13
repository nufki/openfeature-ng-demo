import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import {FeatureFlagService} from "./feature-flag.service";

export function initializeApp(featureFlagService: FeatureFlagService) {
  return () => featureFlagService.initializeOpenFeature();
}

export const appConfig: ApplicationConfig = {
  providers: [
    FeatureFlagService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [FeatureFlagService],
      multi: true
    }]
};
