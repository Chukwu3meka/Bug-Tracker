import { AlertModel, ProfileModel, ConstantsModel } from './models/index';

export interface AppState {
  readonly alert: AlertModel;
  readonly profile: ProfileModel;
  readonly constants: ConstantsModel;
}
