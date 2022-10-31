import { ViewportScroller, Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { AlertModel, ProfileModel } from 'src/app/store/models/index';
import { getLocalStorage } from './source/commonFunction';
import { SetProfileAction } from './store/actions/profile.actions';
import {
  SetTeamsAction,
  SetPlatformsAction,
} from './store/actions/constants.actions';
import { PlatformsService, TeamsService } from './services/index';
import { authenticationHeader, basicAuth } from './source/appConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  profile: Observable<ProfileModel>;

  public appAlert: AlertModel = {
    message: '',
    status: 'error',
    hidden: true,
  };
  public authorised: boolean = !true;
  public authPage: string = 'signin';
  public authData = { role: 'user', authorised: false };

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

    const profile = getLocalStorage();
    // check if user auth was saved to local storage
    if (profile?.auth) {
      this.store.dispatch(
        SetProfileAction({ payload: { auth: true, ...profile } })
      );
    }
    this.pageLoadingHandler();

    const alert = store.select('alert');
    this.profile = store.select('profile');

    alert.subscribe(({ message, status }) => {
      if (message) {
        this.appAlert = { message, status, hidden: false };

        // hide universal app alert after some time
        setTimeout(() => (this.appAlert.hidden = true), 2500);

        // public appAlert: AlertModel = {
        //   message: '',
        //   status: 'error',
        //   hidden: false,
        // };

        // chukwuemeka@alienforest.com
        // console.log({ message, status });
        // this.authData.authorised = auth;
        // this.authData.role = role || 'user';

        // if (['/signup', '/signin', '/reset'].includes(this.router.url))
        //   this.router.navigate(['/']);
      }
    });

    this.profile.subscribe(({ auth, role, basicAuth: headerAuth }) => {
      this.authData.authorised = auth;

      if (auth) {
        this.authData.role = role || 'user';

        if (['/signup', '/signin', '/reset'].includes(this.router.url))
          this.router.navigate(['/']);

        // console.log({ basicAuth });

        basicAuth.data = `${headerAuth}`;

        // console.log(basicAuth.data);

        this.platformsService.getPlatforms().subscribe((res) => {
          // const platforms = res.map(
          //   ({
          //     platformId: id,
          //     platformName: title,
          //     platformStatus: disabled,
          //   }) => ({
          //     id,
          //     title,
          //     disabled: disabled === 'ACTIVE' ? false : true,
          //   })
          // );
          // this.store.dispatch(SetPlatformsAction({ payload: platforms }));
        });

        // authenticationHeader.email = this.auth.email;
        // authenticationHeader.password = this.auth.password;
      }
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
    // console.log('here');
    // if (!this.pageLoading) {
    // }
    // console.log(res);
  }

  // ngAfterContentInit(): void {
  //   console.log('here last', authenticationHeader);
  // }

  // ngAfterViewInit(): void {
  //   console.log('here last 1', authenticationHeader);
  // }

  private pageLoadingHandler(): void {
    setTimeout(() => {
      this.pageLoading = false;
    }, 1000);
  }

  private minScreenAllowed(): void {
    // const isChromiumBased: boolean = !!window['chrome'];
    const isChromiumBased: boolean = !!window;

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
