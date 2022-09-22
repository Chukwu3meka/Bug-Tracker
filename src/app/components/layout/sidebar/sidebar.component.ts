import { Component, OnInit } from '@angular/core';
import { Bugs } from 'src/app/mock-database';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  notifications!: string[];

  public notificationsLoading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.notifications = Bugs.map(
        (x) =>
          // img: 'https://placeimg.com/100/100/people',
          x.description
      ).slice(0, 4);
      this.notificationsLoading = false;
    }, 1000);
  }

  ngOnInit(): void {}
}
