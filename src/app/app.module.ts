import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/app/source/nzIcons';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { nzModules } from 'src/app/source/nzModules';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AddBugComponent } from './components/bugs/add-bug/add-bug.component';
import { DashboardComponent } from './components/bugs/dashboard/dashboard.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BugListsComponent } from './components/bugs/bug-list/bug-list.component';
import { BugStatComponent } from './components/bugs/bug-stat/bug-stat.component';
import { DateAgoPipe } from './pipes/dateago.pipe';
// import { AdminPanel } from './components/bugs/select-options/select-options.component';
import { LoadingComponent } from './components/layout/loading/loading.component';
import { BugDetailsComponent } from './components/bugs/bug-details/bug-details.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ResetComponent } from './components/auth/reset/reset.component';

import { StoreModule } from '@ngrx/store';
// import { ProfileReducer } from './store/reducers/profile.reducer';
// import { ProfileReducer } from './store/reducers/profile.reducer';
// import { TeamsReducer } from './store/reducers/teams.reducer';
import { ConstantsReducer, ProfileReducer } from './store/reducers/index';
import { PlatformsComponent } from './components/admin/platforms/platforms.component';
import { TeamsComponent } from './components/admin/teams/teams.component';
// import { ContainerComponent } from './components/admin/container/container.component';
// import { PanelComponent } from './components/admin/panel/panel.component';
import { PortalComponent } from './components/admin/portal/portal.component';
import { AdminsComponent } from './components/admin/admins/admins.component';
import { UsersComponent } from './components/admin/users/users.component';
import { DevelopersComponent } from './components/admin/developers/developers.component';
import { AlertReducer } from './store/reducers/alert.reducer';
import { LabelComponent } from './components/others/label/label.component';
// import { ProfileReducer } from './store/reducers/profile.reducer';
// import { FileuploadComponent } from './components/fileupload/fileupload.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AddBugComponent,
    DashboardComponent,
    NotificationComponent,
    ProfileComponent,
    BugListsComponent,
    BugStatComponent,
    DateAgoPipe,
    // AdminPanel,
    LoadingComponent,
    BugDetailsComponent,
    SigninComponent,
    SignupComponent,
    ResetComponent,
    PlatformsComponent,
    TeamsComponent,
    // ContainerComponent,
    // PanelComponent,
    PortalComponent,
    AdminsComponent,
    UsersComponent,
    DevelopersComponent,
    LabelComponent,
  ],
  imports: [
    StoreModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    nzModules,
    NgxChartsModule,
    StoreModule.forRoot({
      alert: AlertReducer,
      profile: ProfileReducer,
      constants: ConstantsReducer,
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
