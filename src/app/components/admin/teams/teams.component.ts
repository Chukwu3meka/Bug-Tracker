import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models/index';
import { Store } from '@ngrx/store';

// const initEditCache: ConstantsModel['teams'] = {
export interface Cache {
  id?: number;
  title?: string;
  disabled: boolean;
  platforms?: string;
}

const initEditCache: Cache = {
  id: undefined,
  title: undefined,
  disabled: false,
  platforms: undefined,
};

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less'],
})
export class TeamsComponent implements OnInit {
  public entrydata: any = {};
  constants: Observable<ConstantsModel>;
  editCache: Cache = initEditCache;

  // listOfData: ConstantsModel['teams'][] = [];
  listOfData: any = [];

  constructor(private store: Store<AppState>) {
    this.constants = this.store.select('constants');
  }

  startEdit(data): void {
    // console.log(data);
    this.editCache.id = data.id;
    this.editCache.title = data.title;
    this.editCache.platforms = data.platforms;
    this.editCache.platforms = data.platforms;
    // console.log(this.editCache);
  }

  cancelEdit(id: number): void {
    this.editCache = {
      disabled: false,
    };
  }

  saveEdit(id: number): void {
    console.log(this.editCache);

    isabled: false;
    id: 3;
    platforms: [7];
    title: 'Mobile App';

    const entryIndex = this.listOfData.findIndex((x) => x.id === id);
    // this.listOfData =

    this.listOfData = [];
    // this.listOfData.forEach((x) => {
    const a = this.listOfData.map((x) => {
      //   // this.editCache[entryIndex] = {
      if (x === entryIndex) {
        x = {
          title: this.editCache.title,
          disabled: this.editCache.disabled,
          platforms: this.editCache.platforms,
        };
      }
    });

    this.listOfData = a;

    // this.listOfData[entryIndex].title = this.editCache.title;
    // this.listOfData[entryIndex].disabled = this.editCache.disabled;
    // this.listOfData[entryIndex].platforms = this.editCache.platforms;
    this.editCache = { disabled: false };
  }

  ngOnInit(): void {
    this.constants.subscribe((constants) => {
      this.listOfData = constants.teams;
    });
  }
}
