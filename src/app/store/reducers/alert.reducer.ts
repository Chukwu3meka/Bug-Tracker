import { Action, createReducer, on } from '@ngrx/store';

import { AlertModel } from '../models/index';
import * as AlertActions from '../actions/alert.actions';

const initialState: AlertModel = {
  message: '',
  status: 'info',
  hidden: true,
};

const reducer = createReducer(
  initialState,
  on(AlertActions.SetAlertAction, (state, action) => {
    // return { ...action.payload, status: state.payload || false };
    return action.payload;
  }),
  on(AlertActions.RemoveAlertAction, (state, action) => action.payload)
);

export function AlertReducer(state: AlertModel | undefined, action: Action) {
  return reducer(state, action);
}
