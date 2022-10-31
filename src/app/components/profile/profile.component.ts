import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { removeLocalStorage } from 'src/app/source/commonFunction';
import { RemoveProfileAction } from 'src/app/store/actions/profile.actions';
import { ConstantsModel, ProfileModel } from 'src/app/store/models/index';
import { SetAlertAction } from 'src/app/store/actions/alert.actions';
import { publicApiUrl } from 'src/app/source/appConstants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: Observable<ProfileModel>;
  constants: Observable<ConstantsModel>;

  constructor(private store: Store<AppState>) {
    this.profile = store.select('profile');
    this.constants = store.select('constants');
  }

  ngOnInit(): void {
    let teams;
    this.constants.subscribe((constants) => (teams = constants.teams));

    this.profile.subscribe((auth) => {
      const authDetails: any = auth;
      console.log(auth);

      this.profileData = {
        img: `assets/images/profile/${authDetails.role}.png`,
        role: authDetails.role,

        list: [
          {
            title: 'Fullname',
            data: `${authDetails.firstName} ${authDetails.lastName}`,
          },
          { title: 'eMail Address', data: authDetails.email },
          {
            title: 'Contributions',
            data: `Reported and resolved ${
              authDetails.contributions || 0
            } Bugs`,
          },
          {
            title: 'Profile Disabled',
            data: `Profile is currently ${
              authDetails.enabled ? 'active' : 'disabled'
            }`,
          },
          // {
          //   title: 'Department',
          //   data: auth.department ? 'Info Tech' : 'Non InfoTech',
          // },
          // {
          //   title: 'Team',
          //   data: auth.department
          //     ? teams[`${auth.team}`].title
          //     : 'Regular Banking',
          // },
        ],
      };
    });
  }

  public profileData: ProfileData = {
    list: undefined,
    img: undefined,
    team: undefined,
    role: undefined,
  };

  public logoutHandler = (): void => {
    // permanently delete profile from local store
    removeLocalStorage();
    this.store.dispatch(RemoveProfileAction({ payload: { auth: false } }));

    this.store.dispatch(
      SetAlertAction({
        payload: { message: 'Signed Out', status: 'success', hidden: false },
      })
    );
  };
}

export interface ProfileData {
  list?: { title: string; data?: string }[];
  img?: string;
  team?: number;
  role?: string;
}
