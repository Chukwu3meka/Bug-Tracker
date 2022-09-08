import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  public selectedTab: number = 0;

  public tabs: Array<{ name: string; icon: string }> = [
    { name: 'Bugs', icon: 'bug' },
    { name: 'Add Bugs', icon: 'file-add' },
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Feedback', icon: 'wechat' },
    { name: 'Profile', icon: 'user' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
