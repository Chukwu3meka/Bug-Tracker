import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeLocalStorage } from 'src/app/libs/commonFunction';
import {
  RemoveProfileAction,
  SetProfileAction,
} from 'src/app/store/actions/profile.actions';
import { AppState } from 'src/app/store/app.state';
import { ProfileModel } from 'src/app/store/models/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  profile: Observable<ProfileModel>;

  constructor(private store: Store<AppState>) {
    this.profile = store.select('profile');
  }
  ngOnInit(): void {
    this.profile.subscribe((profile) => {
      console.log(profile);

      this.profileData = {
        img: profile.img,
        role: profile.role,
        // team: profile.team,

        list: [
          { title: 'Fullname', data: profile.name },
          {
            title: 'First Signin',
            data: new Date(`${profile.dateCreated}`).toDateString(),
          },
          {
            title: 'Contributions',
            data: `Reported and resolved ${profile.contributions} Bugs`,
          },
          { title: 'Department', data: profile.department },
          { title: 'Team', data: profile.team ? 'd' : 'Regular Banking' },
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

  // public profileData;
  // public profileImg?: string;

  // public profileImg?: string = '/assets/images/profilePic.png';

  // public profileData = [
  //   { title: 'Fullname', data: 'Troy Cormier Glover' },
  //   {
  //     title: 'First Signin',
  //     data: new Date(
  //       'Tue Jul 19 2022 03:35:22 GMT+0100 (West Africa Standard Time)'
  //     ).toDateString(),
  //   },
  //   { title: 'Contributions', data: 'Reported and resolved 36 Bugs' },
  //   { title: 'Branch', data: 'Head Office' },
  //   { title: 'Department', data: 'Cash and Teller' },
  // ];

  public logoutHandler = (): void => {
    // permanently delete profile from local store
    removeLocalStorage();
    this.store.dispatch(RemoveProfileAction({ payload: { auth: false } }));
  };
}

export interface ProfileData {
  list?: { title: string; data?: string }[];
  img?: string;
  team?: number;
  role?: string;
}
