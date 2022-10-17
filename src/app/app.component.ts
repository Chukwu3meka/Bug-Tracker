import { ViewportScroller, Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ProfileModel } from 'src/app/store/models/index';
import { getLocalStorage } from './libs/commonFunction';
import { SetProfileAction } from './store/actions/profile.actions';
import {
  SetTeamsAction,
  SetPlatformsAction,
} from './store/actions/constants.actions';
import { PlatformsService, TeamsService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  profile: Observable<ProfileModel>;

  public authorised: boolean = !true;
  public authPage: string = 'signin';
  public authData = {
    role: 'user',
    authorised: false,
  };

  public pageLoading: boolean = true;
  public appNotCompatible: string = '';
  private wideScreenWidth: number = 1200;
  private wideScreenHeight: number = 560;

  constructor(
    private router: Router,
    private _location: Location,
    private store: Store<AppState>,
    private teamsService: TeamsService,
    private platformsService: PlatformsService,
    private viewPortscroller: ViewportScroller
  ) {
    this.teamsService.getTeams().subscribe((res) => {
      this.store.dispatch(SetTeamsAction({ payload: res }));
    });

    this.platformsService.getPlatforms().subscribe((res) => {
      this.store.dispatch(SetPlatformsAction({ payload: res }));
    });

    const profile = getLocalStorage();
    // check if user auth was saved to local storage
    if (profile?.auth) {
      this.store.dispatch(
        SetProfileAction({ payload: { auth: true, ...profile } })
      );
    }
    this.pageLoadingHandler();

    this.profile = store.select('profile');

    this.profile.subscribe(({ auth, role }) => {
      this.authData.authorised = auth;
      this.authData.role = role || 'user';

      if (['/signup', '/signin', '/reset'].includes(this.router.url))
        this.router.navigate(['/']);
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          this.authData.authorised &&
          ['/signup', '/signin', '/reset'].includes(event.url)
        ) {
          // If user is authenticated and trying to visit an auth route, Redirect him back to homepage
          this.router.navigate(['/']);
        }

        // if non-admin is trying to access admin page, redirect
        if (this.authData.role !== 'admin' && '/admin' === event.url)
          this._location.back();

        // this.authData.role

        if (['/signup', '/signin', '/reset'].includes(event.url))
          this.authPage = event.url.replace('/', '');

        // if (['/signup', '/signin', '/reset'].includes(event.url))
        // this.authPage = event.url.replace('/', '');

        // console.log(this.profile);

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
    // this.teamsService.getTeams().subscribe((res) => {
    //   // console.log(res);
    //   console.log(res);
    //   this.store.dispatch(SetTeamsAction({ payload: res }));
    // });
    // this.platformsService.getPlatforms().subscribe((res) => {
    //   this.store.dispatch(SetPlatformsAction({ payload: res }));
    // });
    // const profile = getLocalStorage();
    // // check if user auth was saved to local storage
    // if (profile?.auth) {
    //   this.store.dispatch(
    //     SetProfileAction({ payload: { auth: true, ...profile } })
    //   );
    // }
    // this.pageLoadingHandler();
  }

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

    // // ! delete this to enfore wide screen
    // this.appNotCompatible = '';
  }

  @HostListener('window:resize', ['$event'])
  detectResize = (): void => {
    this.minScreenAllowed();
  };
}
