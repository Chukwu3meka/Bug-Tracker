import { Component, OnInit } from '@angular/core';

import { Bugs } from '../layout/sidebar/mockBugs';
import { DateAgoPipe } from 'src/app/pipes/dateago.pipe';
import { Bug } from 'src/app/interface/Old-Bug';

@Component({
  selector: 'app-feedback',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less'],
})
export class NotificationComponent implements OnInit {
  notifications!: any[];
  Bugs: Bug[] = Bugs;
  public notificationsLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    const dateAgoPipe = new DateAgoPipe();
    setTimeout(() => {
      this.notifications = this.Bugs.map((x) => ({
        // img: 'https://placeimg.com/100/100/people',
        description: x.description,
        date: dateAgoPipe.transform(x.created),
      })).slice(0, 4);
      this.notificationsLoading = false;
    }, 1000);
  }
}
