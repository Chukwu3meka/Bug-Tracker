import { Teams } from '../models/index';
import { createAction, props } from '@ngrx/store';

export const SetTeamsAction = createAction(
  '[Teams] Set',
  props<{ payload: Teams }>()
);
