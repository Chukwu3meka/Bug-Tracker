import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/services';
import { DateAgoPipe } from 'src/app/pipes/dateago.pipe';
import { ProfileModel } from 'src/app/store/models/index';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-feedback',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  profile: Observable<ProfileModel>;

  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {
    this.profile = this.store.select('profile');
  }

  ngOnInit(): void {
    this.profile.subscribe((profile) => {
      const id = profile.id;

      const dateAgoPipe = new DateAgoPipe();

      this.notificationService.getNotification(id).subscribe((res) => {
        this.notifications = res.map((notifications) => ({
          event: notifications.event,
          date: dateAgoPipe.transform(notifications.date),
        }));
        this.notificationsLoading = false;
      });
    });
  }

  public notifications: any;
  public notificationsLoading: boolean = true;
}
