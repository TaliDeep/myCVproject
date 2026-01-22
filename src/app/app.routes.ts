import { Routes } from '@angular/router';
import { Background } from './background/background';

export const routes: Routes = [
  {path: '', component: Background, data: {breadcrumb: 'Home'}}
];