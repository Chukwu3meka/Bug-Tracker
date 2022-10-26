import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { removeLocalStorage } from 'src/app/libs/commonFunction';
import { RemoveProfileAction } from 'src/app/store/actions/profile.actions';
import { ConstantsModel, ProfileModel } from 'src/app/store/models/index';
import { SetAlertAction } from 'src/app/store/actions/alert.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
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
      this.profileData = {
        img: auth.img,
        role: auth.role,

        list: [
          { title: 'Fullname', data: auth.name },
          {
            title: 'First Signin',
            data: new Date(`${auth.dateCreated}`).toDateString(),
          },
          {
            title: 'Contributions',
            data: `Reported and resolved ${auth.contributions} Bugs`,
          },
          {
            title: 'Department',
            data: auth.department ? 'Info Tech' : 'Non InfoTech',
          },
          {
            title: 'Team',
            data: auth.department
              ? teams[`${auth.team}`].title
              : 'Regular Banking',
          },
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
