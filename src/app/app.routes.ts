import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserComponent,
  },
  {
    path: 'login',
    component: UserComponent,
  },
  {
    path: 'task/:id',
    component: TaskComponent,
  },
];
