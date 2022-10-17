import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less'],
})
export class TeamsComponent implements OnInit {
  public entrydata: any = {};
  constants: Observable<ConstantsModel>;
  editCache: any = {};

  // listOfData: ConstantsModel['teams'][] = [];
  listOfData: any = [];

  constructor(private store: Store<AppState>) {
    this.constants = this.store.select('constants');
  }

  startEdit(data): void {
    this.editCache = data;
  }

  cancelEdit(id: number): void {
    // const index = this.listOfData.findIndex((item) => item.id === id);
    console.log('cancel edit');
    this.editCache = {};
  }

  saveEdit(id: number): void {
    // Object.assign(this.listOfData[index], this.editCache=data);
    console.log('cancel edit');
    this.editCache = {};
  }

  ngOnInit(): void {
    this.constants.subscribe((constants) => {
      this.listOfData = constants.teams;
    });
  }
}
