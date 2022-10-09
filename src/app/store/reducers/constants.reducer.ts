import { Action, createReducer, on } from '@ngrx/store';
import { ConstantsModel, PlatformsModel } from '../models/index';
import { SetPlatformsAction } from '../actions/index';

const initialState: ConstantsModel = {
  // platforms,
};

const reducer = createReducer(
  initialState,
  on(SetPlatformsAction, (state, action) => ({
    ...state,
    // platforms: action.payload,
    platforms: action.payload,
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
