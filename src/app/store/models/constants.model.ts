export interface ConstantsModel {
  platforms: PlatformsModel[];
  teams: TeamsModel[];
}

export interface PlatformsModel {
  id?: number;
  title?: string;
}

export interface TeamsModel {
  id?: number;
  title?: string;
  platforms?: number[];
}
