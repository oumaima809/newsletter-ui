import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'admin-page',
    component: AdminPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

];
