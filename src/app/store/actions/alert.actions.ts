import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { AlertModel } from '../models/index';

// export const SET_Alert = '[Alert] Set';
// export const REMOVE_Alert = '[Alert] Remove';

import { createAction, props } from '@ngrx/store';

export const SetAlertAction = createAction(
  '[ALERT] Set',
  props<{ payload: AlertModel }>()
);

export const RemoveAlertAction = createAction(
  '[ALERT] Remove',
  props<{ payload: AlertModel }>()
);

// export class SetAlert implements Action {
//   readonly type = SET_Alert;

//   constructor(public payload: Alert) {}
// }

// export class RemoveAlert implements Action {
//   readonly type = REMOVE_Alert;

//   constructor(public payload: undefined) {}
// }

// export type Actions = SetAlert | RemoveAlert;
