import { Action, createReducer, on } from '@ngrx/store';
import { Platforms } from '../models/index';
import { SetPlatformsAction } from '../actions/index';

const initialState: Platforms = {
  // auth: false,
};

const reducer = createReducer(
  initialState,
  on(SetPlatformsAction, (state, action) => {
    // return [...state, action.payload];
    return action.payload;
  })
);

export function PlatformsReducer(state: Platforms | undefined, action: Action) {
  return reducer(state, action);
}
