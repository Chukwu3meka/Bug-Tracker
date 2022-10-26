export interface ProfileModel {
  auth: boolean;
  id?: number;
  img?: string;
  name?: string;
  dateCreated?: string;
  contributions?: number;
  department?: string;
  team?: string;
  email?: string;
  role?: string;
  basicAuth?: string;
}
