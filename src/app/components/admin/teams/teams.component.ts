import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models/index';
import { Store } from '@ngrx/store';

export interface Cache {
  id?: number;
  title?: string;
  disabled: boolean;
  platforms?: string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less'],
})
export class TeamsComponent implements OnInit {
  entrydata: any = {};
  listOfData: any = [];
  editCache: Cache = {
    id: undefined,
    title: undefined,
    disabled: false,
    platforms: undefined,
  };
  constants: Observable<ConstantsModel>;

  constructor(private store: Store<AppState>) {
    this.constants = this.store.select('constants');
  }
  ngOnInit(): void {
    this.constants.subscribe((constants) => {
      this.listOfData = constants.teams;
    });
  }

  startEdit(data): void {
    this.editCache.id = data.id;
    this.editCache.title = data.title;
    this.editCache.platforms = data.platforms;
    this.editCache.platforms = data.platforms;
  }

  cancelEdit(): void {
    this.editCache = {
      disabled: false,
    };
  }

  saveEdit(id: number): void {
    const entryIndex = this.listOfData.findIndex((x) => x.id === id);
    this.listOfData = this.listOfData.map((x) => {
      if (entryIndex !== x.id) return x;

      return {
        id: this.editCache.id,
        title: this.editCache.title,
        disabled: this.editCache.disabled,
        platforms: this.editCache.platforms,
      };
    });

    this.editCache = { disabled: false };
  }
}
