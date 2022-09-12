import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  // @Input() activeTab = null;

  // public activeTab: ?number;

  @Output() activeTabHandler = new EventEmitter();

  public profilePicture?: string = '//joeschmoe.io/api/v1/random';

  public tabs: Array<{ name: string; path: string; icon: string }> = [
    { name: 'Bugs', path: '/bugs', icon: 'bug' },
    { name: 'Add Bugs', path: '/add-bugs', icon: 'file-add' },
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Feedback', path: '/feedback', icon: 'wechat' },
    { name: 'Profile', path: '/profile', icon: 'user' },
  ];

  public switchTabHandler = (selectedTab: number) => {
    console.log('hey');
    this.activeTabHandler.emit(selectedTab);
  };
}
