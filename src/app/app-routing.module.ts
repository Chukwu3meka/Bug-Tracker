import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routes
import { ProfileComponent } from './components/profile/profile.component';
import { AddBugComponent } from './components/bugs/add-bug/add-bug.component';
import { BugListsComponent } from './components/bugs/bug-list/bug-list.component';
import { DashboardComponent } from './components/bugs/dashboard/dashboard.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SelectOptionsComponent } from './components/bugs/select-options/select-options.component';
import { SigninComponent } from './components/auth/signin/signin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'signin', pathMatch: 'full', component: SigninComponent },
  { path: 'bugs', pathMatch: 'full', component: BugListsComponent },
  { path: 'add-bug', pathMatch: 'full', component: AddBugComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'notification', pathMatch: 'full', component: NotificationComponent },
  {
    path: 'select-options',
    pathMatch: 'full',
    component: SelectOptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
