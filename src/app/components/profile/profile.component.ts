import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeLocalStorage } from 'src/app/libs/commonFunction';
import {
  RemoveProfileAction,
  SetProfileAction,
} from 'src/app/store/actions/profile.actions';
import { AppState } from 'src/app/store/app.state';
import { Profile } from 'src/app/store/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  profile: Observable<Profile>;

  constructor(private store: Store<AppState>) {
    this.profile = store.select('profile');
  }
  ngOnInit(): void {
    this.profile.subscribe((profile) => {
      // this.authorised = auth;

      // if (['/signup', '/signin', '/reset'].includes(this.router.url))
      //   this.router.navigate(['/']);
      console.log(profile);
    });
  }

  public profileImg?: string = '/assets/images/profilePic.png';

  public profileData = [
    { title: 'Fullname', data: 'Troy Cormier Glover' },
    {
      title: 'First Signin',
      data: new Date(
        'Tue Jul 19 2022 03:35:22 GMT+0100 (West Africa Standard Time)'
      ).toDateString(),
    },
    { title: 'Contributions', data: 'Reported and resolved 36 Bugs' },
    { title: 'Branch', data: 'Head Office' },
    { title: 'Department', data: 'Cash and Teller' },
  ];

  public logoutHandler = (): void => {
    // removeLocalStorage()
    // this.store.dispatch(RemoveProfileAction({ payload: { auth: false } }));
  };
}
