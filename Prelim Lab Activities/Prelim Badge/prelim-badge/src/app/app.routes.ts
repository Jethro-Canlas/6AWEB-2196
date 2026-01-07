import { Routes } from '@angular/router';
import { About } from './about/about';
import { Main } from './main/main';
import { Partners } from './partners/partners';
import { Join } from './join/join';

export const routes: Routes = [
  {path: '', component: Main },
  {path: 'about', component: About },
  {path: 'partners', component: Partners },
  {path: 'join', component: Join },
];
