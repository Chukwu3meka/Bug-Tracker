import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BugListsComponent } from './components/bugs/bug-list/bug-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddBugComponent } from './components/bugs/add-bug/add-bug.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DashboardComponent } from './components/bugs/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'bugs', pathMatch: 'full', component: BugListsComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'add-bug', pathMatch: 'full', component: AddBugComponent },
  { path: 'notification', pathMatch: 'full', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
