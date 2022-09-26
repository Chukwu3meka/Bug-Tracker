import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public pageLoading: boolean = true;
  public appNotCompatible: string = '';
  private wideScreenWidth: number = 1200;
  private wideScreenHeight: number = 600;

  private pageLoadingHandler(): void {
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }

  private minScreenAllowed(): void {
    const chromeBrowser: boolean = 'chrome' === this.getBrowserName();

    const wideScreen: boolean =
      window.innerHeight >= this.wideScreenHeight &&
      window.innerWidth >= this.wideScreenWidth;

    this.appNotCompatible = !chromeBrowser
      ? 'Kindly use a Chrome browser'
      : !wideScreen
      ? 'Kindly use a wider Screen'
      : '';
  }

  @HostListener('window:resize', ['$event'])
  detectResize = (): void => {
    this.minScreenAllowed();
  };

  constructor(
    private router: Router,
    private viewPortscroller: ViewportScroller
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.viewPortscroller.scrollToPosition([0, 0]); // <= scroll to op on route change
        this.pageLoadingHandler();
      }
      if (event instanceof NavigationEnd) {
        this.pageLoading = true;
      }
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });

    this.minScreenAllowed(); // <= detect browser and device width/height
  }

  private getBrowserName() {
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

  ngOnInit(): void {
    this.pageLoadingHandler();
  }
}
