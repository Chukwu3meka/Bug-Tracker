import { Action, createReducer, on } from '@ngrx/store';
import { ConstantsModel } from '../models/index';
import * as ConstantActions from '../actions/constants.actions';

const initialState: ConstantsModel = {};

const reducer = createReducer(
  initialState,
  on(ConstantActions.SetPlatformsAction, (state, action) => ({
    ...state,
    platforms: action.payload,
  })),
  on(ConstantActions.SetPlatformsAction, (state, action) => ({
    ...state,
    department: action.payload,
  })),
  on(ConstantActions.SetTeamsAction, (state, action) => ({
    ...state,
    teams: action.payload,
  }))
);

export function ConstantsReducer(
  state: ConstantsModel | undefined,
  action: Action
) {
  return reducer(state, action);
}

// return [...state, action.payload];
// export function reducer(
//   state: ProfileModel = initialState,
//   action: ProfileActions.Actions
// ) {
//   switch (action.type) {
//     case ProfileActions.SET_PROFILE:
//       return action.payload;
//     default:
//       return undefined;
//     // return state;
//   }
// }
// //
