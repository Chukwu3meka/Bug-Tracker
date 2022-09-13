import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BugsComponent } from './components/bugs/bugs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddBugsComponent } from './components/add-bugs/add-bugs.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'bugs', pathMatch: 'full', component: BugsComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'add-bugs', pathMatch: 'full', component: AddBugsComponent },
  { path: 'notification', pathMatch: 'full', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
