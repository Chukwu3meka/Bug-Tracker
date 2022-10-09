import { Action, createReducer, on } from '@ngrx/store';
import { PlatformsModel } from '../models/index';
import { SetPlatformsAction } from '../actions/index';

const initialState: PlatformsModel = {
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
  state: PlatformsModel | undefined,
  action: Action
) {
  return reducer(state, action);
}
