import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ConstantsModel } from '../models/index';

// export const SET_PROFILE = '[PROFILE] Set';
// export const REMOVE_PROFILE = '[PROFILE] Remove';

import { createAction, props } from '@ngrx/store';

export const SetPlatformsAction = createAction(
  '[PLATFORMS] Set',
  props<{ payload: ConstantsModel['platforms'] }>()
);

export const SetTeamsAction = createAction(
  '[Teams] Set',
  props<{ payload: ConstantsModel['teams'] }>()
);
