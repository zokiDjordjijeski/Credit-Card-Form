import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxMaskConfig, provideEnvironmentNgxMask } from 'ngx-mask';
import { routes } from './app.routes';

const maskConfig: Partial<NgxMaskConfig> = {
  validation: false,
};
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideEnvironmentNgxMask(maskConfig),
    provideRouter(routes)]
};
