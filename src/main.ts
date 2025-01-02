import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app-config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterModule],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig);
