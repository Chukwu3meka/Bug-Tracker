import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { SetProfileAction } from 'src/app/store/actions/profile.actions';
import { UsersService } from 'src/app/services/users.service';
import { setLocalStorage } from 'src/app/libs/commonFunction';

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
  public auth = { email: '', password: '' };

  public loginHandler = (): void => {
    this.usersService.login(this.auth).subscribe((res) => {
      const profile = res[0];
      if (profile?.id) {
        // console.log(profile);
        this.store.dispatch(
          SetProfileAction({ payload: { auth: true, ...profile } })
        );
        setLocalStorage({ auth: true, ...profile });
      }
    });

    // usersService

    // UsersService
    // console.log(this.auth, 'Sdasdsa das ');
  };
}
