import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BugsComponent } from './components/bugs/bugs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddBugsComponent } from './components/add-bugs/add-bugs.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'bugs', pathMatch: 'full', component: BugsComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'add-bugs', pathMatch: 'full', component: AddBugsComponent },
  { path: 'feedback', pathMatch: 'full', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
