import { Component, HostListener } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  private wideScreenWidth: number = 1200;
  private wideScreenHeight: number = 520;

  public wideScreen: boolean = true;

  @HostListener('window:resize', ['$event'])
  getScreenSize = () => {
    this.wideScreen =
      window.innerHeight >= this.wideScreenHeight &&
      window.innerWidth >= this.wideScreenWidth;
  };

  // public activeTab?: number;

  // public activeTabHandler = (selectedTab: number) => {
  //   console.log(selectedTab, this.activeTab);
  //   this.activeTab = selectedTab;
  // };

  // isCollapsed = false;

  constructor() {
    this.wideScreen =
      window.innerHeight >= this.wideScreenHeight &&
      window.innerWidth >= this.wideScreenWidth;
    //   // this.activatedRoute.url.subscribe((currentUrl) => {
    //     // console.log('url is:    ' + currentUrl);
    //     console.log('url is:    ' + window.);
    //   // });
  }
}
