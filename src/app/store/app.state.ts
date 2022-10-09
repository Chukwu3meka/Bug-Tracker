import { ProfileModel, PlatformsModel, TeamsModel } from './models/index';

export interface AppState {
  readonly profile: ProfileModel;
  readonly teams: TeamsModel;
  readonly platfroms: PlatformsModel;
}
