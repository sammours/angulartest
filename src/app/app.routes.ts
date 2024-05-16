import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: AppComponent}, 
    { path: 'weather', component: WeatherComponent}, 
];
