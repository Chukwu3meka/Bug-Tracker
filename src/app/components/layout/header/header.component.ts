import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  @Input() activeTab: number = 0;

  @Output() activeTabHandler = new EventEmitter();

  public profilePicture?: string = '//joeschmoe.io/api/v1/random';

  public tabs: Array<{ name: string; icon: string }> = [
    { name: 'Bugs', icon: 'bug' },
    { name: 'Add Bugs', icon: 'file-add' },
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Feedback', icon: 'wechat' },
    { name: 'Profile', icon: 'user' },
  ];

  public switchTabHandler = (selectedTab: number) =>
    this.activeTabHandler.emit(selectedTab);
}
