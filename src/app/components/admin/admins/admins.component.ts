import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
})
export class AdminsComponent implements OnInit {
  public listOfData;
  constants: Observable<ConstantsModel>;

  constructor(private store: Store<AppState>) {
    this.constants = this.store.select('constants');
  }

  ngOnInit(): void {
    this.constants.subscribe((constants) => {
      this.listOfData = constants.teams;
    });
  }
}
