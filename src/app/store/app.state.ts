import {
  ProfileModel,
  PlatformsModel,
  TeamsModel,
  ConstantsModel,
} from './models/index';

export interface AppState {
  readonly profile: ProfileModel;
  readonly constants: ConstantsModel;
  readonly teams: TeamsModel;
  readonly platfroms: PlatformsModel;
}
