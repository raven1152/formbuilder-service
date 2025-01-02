import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { ProviderComponent } from './app/provider/provider.component';
import { Provider2Component } from './app/provider2/provider2.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: ProviderComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'provider2', component: Provider2Component },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())],
};
