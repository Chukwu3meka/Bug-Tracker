import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Profile } from 'src/app/store/models/profile.model';
import { getLocalStorage } from './libs/commonFunction';
import { SetProfileAction } from './store/actions/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public authorised: boolean = !true;
  public authPage: string = 'signin';

  public pageLoading: boolean = true;
  public appNotCompatible: string = '';
  private wideScreenWidth: number = 1200;
  private wideScreenHeight: number = 600;

  private pageLoadingHandler(): void {
    setTimeout(() => {
      this.pageLoading = false;
    }, 1000);
  }

  private minScreenAllowed(): void {
    const isChromiumBased: boolean = !!window['chrome'];

    const wideScreen: boolean =
      window.innerHeight >= this.wideScreenHeight &&
      window.innerWidth >= this.wideScreenWidth;

    // console.log(wideScreen);

    this.appNotCompatible = !isChromiumBased
      ? 'Kindly use a Chromium-based browser'
      : !wideScreen
      ? 'Kindly use a bigger Screen'
      : '';

    // ! delete this to enfore wide screen
    this.appNotCompatible = '';
  }

  @HostListener('window:resize', ['$event'])
  detectResize = (): void => {
    this.minScreenAllowed();
  };

  profile: Observable<Profile>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private viewPortscroller: ViewportScroller
  ) {
    //   this.store.select(fromStore.getAllChannels).pipe(
    //    filter(channels => channels.length),
    //    // channels.length should always be truthy at this point
    //    tap(channels => console.log('channels', !!channels.length, channels),
    //  );

    this.profile = store.select('profile');

    // .pipe((_ => _.newField !== undefined))

    this.profile.subscribe(({ auth }) => {
      this.authorised = auth;

      if (['/signup', '/signin', '/reset'].includes(this.router.url))
        this.router.navigate(['/']);
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          this.authorised &&
          ['/signup', '/signin', '/reset'].includes(event.url)
        ) {
          // If user is authenticated and trying to visit an auth route, Redirect him back to homepage
          this.router.navigate(['/']);
        }

        if (['/signup', '/signin', '/reset'].includes(event.url))
          this.authPage = event.url.replace('/', '');

        // console.log(this.authPage);

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
    const profile = getLocalStorage();
    // check if user auth was saved to local storage
    if (profile && profile.auth) {
      this.store.dispatch(
        SetProfileAction({ payload: { auth: true, ...profile } })
      );
    }
    this.pageLoadingHandler();
  }
}
