import {Routes} from '@angular/router';
import {AppComponent} from './app/app.component';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: AppComponent},
];

