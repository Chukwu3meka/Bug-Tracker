import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { removeLocalStorage } from 'src/app/libs/commonFunction';
import { RemoveProfileAction } from 'src/app/store/actions/profile.actions';
import {
  AlertModel,
  ConstantsModel,
  ProfileModel,
} from 'src/app/store/models/index';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/services';
import { SetAlertAction } from 'src/app/store/actions/alert.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
})
export class SignupComponent implements OnInit {
  constants: Observable<ConstantsModel>;

  private appAlert = (
    status: AlertModel['status'],
    message: AlertModel['message']
  ): void =>
    this.store.dispatch(SetAlertAction({ payload: { status, message } }));

  constructor(
    private router: Router,
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
    // department?: { id: number; title: string };
    department: number;
  } = {
    team: 0,
    department: 0,
    // department: this.departmentOptions[0],
  };

  passwordVisible = false;
  //   "img": "https://placeimg.com/100/100/people",

  public signupHandler = () => {
    if (
      this.user.email &&
      this.user.lastName &&
      this.user.password &&
      this.user.firstName
    ) {
      if (
        !this.user.email.toLowerCase().endsWith('@zenithbank.com') ||
        this.user.email.length <= 16
      ) {
        this.appAlert(
          'error',
          `Email must contain '@zenithbank.com' and should have at least 16 characters`
        );
      } else {
        this.usersService
          .signup({
            email: this.user.email,
            lastName: this.user.lastName,
            password: this.user.password,
            firstName: this.user.firstName,
          })
          .subscribe((res) => {
            this.appAlert('success', 'Profile created successfully');

            // reset signup form
            this.user = {
              email: '',
              lastName: '',
              password: '',
              firstName: '',
              team: 0,
              department: 0,
            };

            this.router.navigate(['/signin']);
          });
      }
    } else {
      this.appAlert('error', 'All fields are required');
    }
  };
}
