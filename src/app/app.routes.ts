import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { UserGetAll } from './pages/user-get-all/user-get-all';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'user',
    component: UserGetAll,
  },
];
