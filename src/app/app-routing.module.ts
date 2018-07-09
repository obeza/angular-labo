import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './pages/users/users.component'
import { SocketComponent } from './pages/socket/socket.component' 

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'socket', component: SocketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
