import { Routes } from '@angular/router';
import { GreetingsComponent } from './modules/pages/greetings/greetings.component';

export const routes: Routes = [
  { path: '', component: GreetingsComponent },
  { path: 'greetings', component: GreetingsComponent },
];
