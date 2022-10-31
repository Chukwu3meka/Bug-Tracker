import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { NotificationService } from 'src/app/services';
import { ProfileModel } from 'src/app/store/models/index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  profile: Observable<ProfileModel>;
  notifications: any;

  public notificationsLoading: boolean = true;

  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {
    this.profile = this.store.select('profile');
  }

  ngOnInit(): void {
    this.profile.subscribe((profile) => {
      const id = profile.id;

      this.notificationService.getNotification(id).subscribe((res) => {
        this.notifications = res
          .slice(0, 3)
          .map((notifications) => notifications.event);
        this.notificationsLoading = false;
      });
    });
  }
}
