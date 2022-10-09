import { Action, createReducer, on } from '@ngrx/store';
import { ProfileModels } from '../models/index';
import { RemoveProfileAction, SetProfileAction } from '../actions/index';

const initialState: ProfileModels = {
  auth: false,
};

const reducer = createReducer(
  initialState,
  on(SetProfileAction, (state, action) => action.payload),
  on(RemoveProfileAction, (state, action) => action.payload)
);

export function ProfileReducer(
  state: ProfileModels | undefined,
  action: Action
) {
  return reducer(state, action);
}

// return [...state, action.payload];
// export function reducer(
//   state: ProfileModels = initialState,
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
