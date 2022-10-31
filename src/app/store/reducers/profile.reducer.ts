import { Action, createReducer, on } from '@ngrx/store';

import { ProfileModel } from '../models/index';
import * as ProfileActions from '../actions/profile.actions';

const initialState: ProfileModel = {
  auth: false,
};

const reducer = createReducer(
  initialState,
  on(ProfileActions.SetProfileAction, (state, action) => action.payload),
  on(ProfileActions.RemoveProfileAction, (state, action) => action.payload)
);

export function ProfileReducer(
  state: ProfileModel | undefined,
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
