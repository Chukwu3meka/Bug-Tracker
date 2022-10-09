import { ProfileModels, PlatformsModels, TeamsModels } from './models/index';

export interface AppState {
  readonly profile: ProfileModels;
  readonly teams: TeamsModels;
  readonly platfroms: PlatformsModels;
}
