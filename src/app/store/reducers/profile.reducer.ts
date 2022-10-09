import { Action, createReducer, on } from '@ngrx/store';
import { Profile } from '../models/profile.model';
import * as ProfileActions from '../actions/profile.actions';

const initialState: Profile = {
  auth: false,
};

const reducer = createReducer(
  initialState,
  on(ProfileActions.SetProfileAction, (state, action) => {
    // return [...state, action.payload];
    return action.payload;
  }),
  on(ProfileActions.RemoveProfileAction, (state, action) => {
    // return [...state, action.payload];
    return action.payload;
  })
);

export function ProfileReducer(state: Profile | undefined, action: Action) {
  return reducer(state, action);
}

// export function reducer(
//   state: Profile = initialState,
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
