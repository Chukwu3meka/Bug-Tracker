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
import { IconsProviderModule } from '../../libs/ngZorro/nzIcons';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { nzModules } from 'libs/ngZorro/nzModules';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    nzModules,
    NgxChartsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
