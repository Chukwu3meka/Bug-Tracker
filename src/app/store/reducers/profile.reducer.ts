import { Action, createReducer, on } from '@ngrx/store';
import { Profile } from '../models/index';
import { RemoveProfileAction, SetProfileAction } from '../actions/index';

const initialState: Profile = {
  auth: false,
};

const reducer = createReducer(
  initialState,
  on(SetProfileAction, (state, action) => action.payload),
  on(RemoveProfileAction, (state, action) => action.payload)
);

export function ProfileReducer(state: Profile | undefined, action: Action) {
  return reducer(state, action);
}

// return [...state, action.payload];
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
