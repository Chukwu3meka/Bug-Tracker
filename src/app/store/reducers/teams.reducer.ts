import { Action, createReducer, on } from '@ngrx/store';
import { TeamsModels } from '../models/index';
import { SetTeamsAction } from '../actions/index';

const initialState: TeamsModels = {
  // auth: false,
};

const reducer = createReducer(
  initialState,
  on(SetTeamsAction, (state, action) => {
    // return [...state, action.payload];
    return action.payload;
  })
);

export function TeamsReducer(state: TeamsModels | undefined, action: Action) {
  return reducer(state, action);
}
