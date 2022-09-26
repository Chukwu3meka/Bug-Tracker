import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public pageLoading: boolean = true;
  public appNotCompatible: string = '';
  private wideScreenWidth: number = 120;
  private wideScreenHeight: number = 60;

  private pageLoadingHandler(): void {
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }

  private minScreenAllowed(): void {
    const isChromiumBased: boolean = !!window['chrome'];

    const wideScreen: boolean =
      window.innerHeight >= this.wideScreenHeight &&
      window.innerWidth >= this.wideScreenWidth;

    this.appNotCompatible = !isChromiumBased
      ? 'Kindly use a Chromium-based browser'
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

  ngOnInit(): void {
    this.pageLoadingHandler();
  }
}
