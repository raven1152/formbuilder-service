import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app-config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <br/>
    <br/>
    <a routerLink="/provider">Provider</a><br/><br/>
    <a routerLink="/provider2">Provider 2</a><br/><br/>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig);
