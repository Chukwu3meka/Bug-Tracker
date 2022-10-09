import { Action, createReducer, on } from '@ngrx/store';
import { PlatformsModels } from '../models/index';
import { SetPlatformsAction } from '../actions/index';

const initialState: PlatformsModels = {
  // auth: false,
};

const reducer = createReducer(
  initialState,
  on(SetPlatformsAction, (state, action) => {
    // return [...state, action.payload];
    return action.payload;
  })
);

export function PlatformsReducer(
  state: PlatformsModels | undefined,
  action: Action
) {
  return reducer(state, action);
}
