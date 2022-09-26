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
  public pageLoading: boolean = true;

  private wideScreenWidth: number = 300;
  private wideScreenHeight: number = 20;

  public appNotCompatible: string = 'Fdsfdsf';

  private detectWideScreen = () =>
    window.innerHeight >= this.wideScreenHeight &&
    window.innerWidth >= this.wideScreenWidth;

  @HostListener('window:resize', ['$event'])
  detectResize = (): void => {
    this.appNotCompatible = this.detectWideScreen()
      ? this.appNotCompatible
      : 'Kindly use a wider Screen';
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

    const initChromeBrowser: boolean = 'chrome' === this.getBrowserName();

    const initWideScreen: boolean = this.detectWideScreen();

    //   // this.activatedRoute.url.subscribe((currentUrl) => {
    //     // console.log('url is:    ' + currentUrl);
    //   // });

    this.appNotCompatible = !initChromeBrowser
      ? 'Kindly use a Chrome browser'
      : !initWideScreen
      ? 'Kindly use a wider Screen'
      : '';
  }

  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }
}
