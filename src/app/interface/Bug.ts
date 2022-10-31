export interface Pokedex {
  content?:          Content[];
  pageable?:         Pageable;
  last?:             boolean;
  totalPages?:       number;
  totalElements?:    number;
  size?:             number;
  sort?:             Sort;
  first?:            boolean;
  numberOfElements?: number;
  number?:           number;
  empty?:            boolean;
}

export interface Content {
  bugID?:             number;
  label?:             string;
  createdBy?:         null;
  approvedBy?:        null;
  approvedDate?:      null;
  assignedTo?:        null;
  assignedDate?:      Date | null;
  reportDate?:        Date;
  lastUpdate?:        Date | null;
  severity?:          null | string;
  enumSeverity?:      null;
  bugTreatmentStage?: string;
  progressStatus?:    string;
  bugReview?:         string;
  platformses?:       Platforms | null;
  userAssignedToBug?: UserAssignedToBug | null;
}

export interface Platforms {
  platformID?:   number;
  platformName?: string;
}

export interface UserAssignedToBug {
  id?:              number;
  email?:           string;
  password?:        null;
  firstName?:       string;
  lastName?:        string;
  photos?:          null;
  enabled?:         boolean;
  roles?:           Roles;
  photosImagePath?: string;
}

export interface Roles {
  roleID?: number;
  name?:   string;
}

export interface Pageable {
  sort?:       Sort;
  offset?:     number;
  pageSize?:   number;
  pageNumber?: number;
  paged?:      boolean;
  unpaged?:    boolean;
}

export interface Sort {
  empty?:    boolean;
  sorted?:   boolean;
  unsorted?: boolean;
}
