import { Platforms } from '../models/index';
import { createAction, props } from '@ngrx/store';

export const SetPlatformsAction = createAction(
  '[Platforms] Set',
  props<{ payload: Platforms }>()
);
