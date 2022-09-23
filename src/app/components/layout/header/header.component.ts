import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  public profilePicture?: string = '//joeschmoe.io/api/v1/random';

  public tabs: Array<{ name: string; path: string; icon: string }> = [
    { name: 'Add Bug', path: '/add-bug', icon: 'file-add' },
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Bugs', path: '/bugs', icon: 'bug' },
    { name: 'Notification', path: '/notification', icon: 'wechat' },
    { name: 'Options', path: '/select-options', icon: 'edit' },
    { name: 'Profile', path: '/profile', icon: 'user' },
  ];
}
