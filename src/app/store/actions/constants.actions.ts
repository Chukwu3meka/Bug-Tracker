import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ConstantsModel } from '../models/index';

// export const SET_PROFILE = '[PROFILE] Set';
// export const REMOVE_PROFILE = '[PROFILE] Remove';

import { createAction, props } from '@ngrx/store';

export const SetPlatformsAction = createAction(
  '[PLATFORMS] Set',
  // props<{ payload: ConstantsModel['platforms'][] }>()
  props<{ payload: ConstantsModel['platforms'] }>()
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
