export interface ConstantsModel {
  platforms?: PlatformsModel;
  teams?: TeamsModel;
  department?: DepartmentModel;
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

export interface DepartmentModel {
  id?: number;
  title?: string;
}
