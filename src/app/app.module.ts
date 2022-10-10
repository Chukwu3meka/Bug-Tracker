import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/app/libs/nzIcons';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { nzModules } from 'src/app/libs/nzModules';
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
import { SelectOptionsComponent } from './components/bugs/select-options/select-options.component';
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
    SelectOptionsComponent,
    LoadingComponent,
    BugDetailsComponent,
    SigninComponent,
    SignupComponent,
    ResetComponent,
  ],
  imports: [
    StoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    nzModules,
    NgxChartsModule,
    StoreModule.forRoot({
      profile: ProfileReducer,
      constants: ConstantsReducer,
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
