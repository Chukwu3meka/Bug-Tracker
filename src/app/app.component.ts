import { Component, HostListener } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public wideScreen: boolean = true;

  @HostListener('window:resize', ['$event'])
  getScreenSize = () => {
    this.wideScreen = window.innerHeight >= 720 && window.innerWidth >= 1200;
  };

  // public activeTab?: number;

  // public activeTabHandler = (selectedTab: number) => {
  //   console.log(selectedTab, this.activeTab);
  //   this.activeTab = selectedTab;
  // };

  // isCollapsed = false;

  constructor() {
    this.wideScreen = window.innerHeight >= 720 && window.innerWidth >= 1200;
    //   // this.activatedRoute.url.subscribe((currentUrl) => {
    //     // console.log('url is:    ' + currentUrl);
    //     console.log('url is:    ' + window.);
    //   // });
  }
}
