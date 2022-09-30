import { Component, OnInit } from '@angular/core';
import { Bugs } from './mockBugs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  Bugs: any;
  notifications!: string[];

  public notificationsLoading: boolean = true;

  constructor() {
    this.Bugs = Bugs;
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.notifications = Bugs.map(
    //     (x) =>
    //       // img: 'https://placeimg.com/100/100/people',
    //       x.description
    //   ).slice(0, 4);
    //   this.notificationsLoading = false;
    // }, 1000);
  }
}
