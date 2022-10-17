import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { colors } from 'src/app/libs/appConstants';
import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  // public profile: Observable<ConstantsModel>;

  constructor(private store: Store<AppState>) {
    // this.profile = this.store.select('profile');
  }

  ngOnInit(): void {
    // this.profile.subscribe((profile) => {
    //   console.log(profile);
    //   // this.platforms = constants.platforms;
    // });
  }

  public profilePicture?: string = '//joeschmoe.io/api/v1/random';

  public tabs: Array<{ name: string; path: string; icon: string }> = [
    { name: 'Add Bug', path: '/add-bug', icon: 'file-add' },
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Bugs', path: '/bugs', icon: 'bug' },
    { name: 'Notification', path: '/notification', icon: 'wechat' },
    { name: 'Admin', path: '/admin', icon: 'edit' },
    { name: 'Profile', path: '/profile', icon: 'user' },
  ];
}
