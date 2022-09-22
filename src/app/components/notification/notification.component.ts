import { Component, OnInit } from '@angular/core';

import { Bugs } from 'src/app/mock-bugs';
import { DateAgoPipe } from 'src/app/pipes/dateago.pipe';

@Component({
  selector: 'app-feedback',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less'],
})
export class NotificationComponent implements OnInit {
  notifications!: any[];

  public notificationsLoading: boolean = true;

  constructor() {
    const dateAgoPipe = new DateAgoPipe();
    setTimeout(() => {
      this.notifications = Bugs.map((x) => ({
        // img: 'https://placeimg.com/100/100/people',
        description: x.description,
        date: dateAgoPipe.transform(x.created),
      })).slice(0, 4);
      this.notificationsLoading = false;
    }, 1000);
  }

  ngOnInit(): void {}
}
