import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { removeLocalStorage } from 'src/app/libs/commonFunction';
import { RemoveProfileAction } from 'src/app/store/actions/profile.actions';
import { ConstantsModel, ProfileModel } from 'src/app/store/models/index';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
})
export class SignupComponent implements OnInit {
  constants: Observable<ConstantsModel>;

  constructor(
    private store: Store<AppState>,

    private usersService: UsersService
  ) {
    this.constants = this.store.select('constants');
  }

  ngOnInit(): void {
    this.constants.subscribe((constants) => {
      this.teamOptions = constants.teams.filter((x) => x.id !== 0);
    });
  }

  public teamOptions;
  public departmentOptions = [
    { id: 0, title: 'Non Infotech' },
    { id: 1, title: 'Infotech' },
  ];

  public user: {
    email?: string;
    team: number;
    lastName?: string;
    password?: string;
    firstName?: string;
    department?: string;
  } = {
    team: 0,
  };

  passwordVisible = false;
  //   "img": "https://placeimg.com/100/100/people",

  public signupHandler = () => {
    this.usersService
      .signup({
        email: this.user.email,
        lastName: this.user.lastName,
        password: this.user.password,
        firstName: this.user.firstName,
      })
      .subscribe((res) => {
        console.log(res);
      });
    // console.log('this.user', this.user);
    // const { id: teamId } = teams?.find((x) =>
    //   x.platforms.includes(bug.platform)
    // );
  };
}
