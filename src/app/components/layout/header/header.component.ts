import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { ProfileModel } from 'src/app/store/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public profile: Observable<ProfileModel>;

  public profilePicture?: string = '//joeschmoe.io/api/v1/random';
  public tabs: Array<{ name: string; path: string; icon: string }> = [
    { name: 'Add Bug', path: '/add-bug', icon: 'file-add' },
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Bugs', path: '/bugs', icon: 'bug' },
    { name: 'Notification', path: '/notification', icon: 'wechat' },
    { name: 'Profile', path: '/profile', icon: 'user' },
  ];

  constructor(private store: Store<AppState>) {
    this.profile = this.store.select('profile');

    this.profile.subscribe(({ role, img }) => {
      this.profilePicture = img;

      if (role === 'admin') {
        this.tabs = [
          { name: 'Admin', path: '/admin', icon: 'edit' },
          ...this.tabs,
        ];
      }
    });
  }

  ngOnInit(): void {}
}
