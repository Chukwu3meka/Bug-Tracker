export interface ConstantsModel {
  platforms: PlatformsModel[];
  teams: TeamsModel[];
}

export interface PlatformsModel {
  id?: number;
  title?: string;
  disabled?: boolean;
}

export interface TeamsModel {
  id?: number;
  title?: string;
  platforms?: number[];
  disabled?: boolean;
}
