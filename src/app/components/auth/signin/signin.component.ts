import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Profile } from 'src/app/store/models/profile.model';
import { SetProfileAction } from 'src/app/store/actions/profile.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less'],
})
export class SigninComponent implements OnInit {
  // profile: Observable<Profile>;

  constructor(private store: Store<AppState>) {
    // this.profile = store.select('profile');
    // console.log(this.profile);
  }

  ngOnInit(): void {}

  public passwordVisible = false;
  public auth = { email: '', password: '' };

  public loginHandler = (): void => {
    console.log(this.auth, 'Sdasdsa das ');

    this.store.dispatch(
      SetProfileAction({
        payload: {
          name: 'esresr e es re',
          id: 'sadsadsa',
        },
      })
    );
  };
}
