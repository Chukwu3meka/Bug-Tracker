import { ProfileModel, ConstantsModel } from './models/index';

export interface AppState {
  readonly profile: ProfileModel;
  readonly constants: ConstantsModel;
}
