import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Profile } from '../models/index';

// export const SET_PROFILE = '[PROFILE] Set';
// export const REMOVE_PROFILE = '[PROFILE] Remove';

import { createAction, props } from '@ngrx/store';

export const SetProfileAction = createAction(
  '[PROFILE] Set',
  props<{ payload: Profile }>()
);

export const RemoveProfileAction = createAction(
  '[PROFILE] Remove',
  props<{ payload: Profile }>()
);

// export class SetProfile implements Action {
//   readonly type = SET_PROFILE;

//   constructor(public payload: Profile) {}
// }

// export class RemoveProfile implements Action {
//   readonly type = REMOVE_PROFILE;

//   constructor(public payload: undefined) {}
// }

// export type Actions = SetProfile | RemoveProfile;
