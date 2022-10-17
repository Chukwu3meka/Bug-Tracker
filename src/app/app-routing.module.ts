import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetComponent } from './components/auth/reset/reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { PortalComponent } from './components/admin/portal/portal.component';
import { AddBugComponent } from './components/bugs/add-bug/add-bug.component';
import { BugListsComponent } from './components/bugs/bug-list/bug-list.component';
import { DashboardComponent } from './components/bugs/dashboard/dashboard.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'signin', pathMatch: 'full', component: SigninComponent },
  { path: 'signup', pathMatch: 'full', component: SignupComponent },
  { path: 'reset', pathMatch: 'full', component: ResetComponent },
  { path: 'bugs', pathMatch: 'full', component: BugListsComponent },
  { path: 'add-bug', pathMatch: 'full', component: AddBugComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'notification', pathMatch: 'full', component: NotificationComponent },
  { path: 'admin', pathMatch: 'full', component: PortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
