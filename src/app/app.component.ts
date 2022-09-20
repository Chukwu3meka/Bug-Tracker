import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  private wideScreenWidth: number = 1300;
  private wideScreenHeight: number = 620;

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

  constructor(
    private router: Router,
    private viewPortscroller: ViewportScroller
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.viewPortscroller.scrollToPosition([0, 0]); // <= scroll to op on route change
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });

    // detect browser

    this.wideScreen =
      window.innerHeight >= this.wideScreenHeight &&
      window.innerWidth >= this.wideScreenWidth;
    //   // this.activatedRoute.url.subscribe((currentUrl) => {
    //     // console.log('url is:    ' + currentUrl);
    //     console.log('url is:    ' + window.);
    //   // });
  }
}
