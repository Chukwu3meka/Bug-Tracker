import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { UsersService } from 'src/app/services/index';
import { setLocalStorage } from 'src/app/libs/commonFunction';
import { SetProfileAction } from 'src/app/store/actions/profile.actions';
import { SetAlertAction } from 'src/app/store/actions/alert.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less'],
})
export class SigninComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  public passwordVisible = false;
  public loginLoading = false;
  public auth = { email: '', password: '' };

  public loginHandler = (): void => {
    this.loginLoading = true;
    this.usersService.login(this.auth).subscribe(
      (res) => {
        // chukwuemeka@alienforest.com

        // console.log(res);

        //   const profile = res[0];
        if (res?.id) {
          // save profile to app
          this.store.dispatch(
            SetAlertAction({
              payload: {
                message: 'Signin Successfull',
                status: 'success',
                hidden: false,
              },
            })
          );

          this.store.dispatch(
            SetProfileAction({ payload: { auth: true, ...res } })
          );
          // save profile detail to local storage
          setLocalStorage({ auth: true, ...res });
        }
        // if (profile?.id) {
        //   // save profile to app
        //   this.store.dispatch(
        //     SetProfileAction({ payload: { auth: true, ...profile } })
        //   );
        //   // save profile detail to local storage
        //   setLocalStorage({ auth: true, ...profile });
        // }
      }
      // (err) => {
      //   console.log({ err }, 'dsfd');
      // },
      // () => {
      //   console.log('done dsfd');
      // }
    );
    this.loginLoading = false;
  };
}
