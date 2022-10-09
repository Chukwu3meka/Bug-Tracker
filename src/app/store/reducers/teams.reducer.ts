import { Action, createReducer, on } from '@ngrx/store';
import { TeamsModel } from '../models/index';
import { SetTeamsAction } from '../actions/index';

const initialState: TeamsModel = {
  // auth: false,
};

const reducer = createReducer(
  initialState,
  on(SetTeamsAction, (state, action) => {
    // return [...state, action.payload];
    return action.payload;
  })
);

export function TeamsReducer(state: TeamsModel | undefined, action: Action) {
  return reducer(state, action);
}
