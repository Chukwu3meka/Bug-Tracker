import { Action, createReducer, on } from '@ngrx/store';
import { Teams } from '../models/index';
import { SetTeamsAction } from '../actions/index';

const initialState: Teams = {
  // auth: false,
};

const reducer = createReducer(
  initialState,
  on(SetTeamsAction, (state, action) => {
    // return [...state, action.payload];
    return action.payload;
  })
);

export function Reducer(state: Teams | undefined, action: Action) {
  return reducer(state, action);
}
