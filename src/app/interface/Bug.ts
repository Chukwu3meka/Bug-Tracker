export interface Bug {
  id: string;
  severity: string;
  created: string;
  platform: string;
  reporter: Reporter;
  label: string;
  status: string;
  description: string;
  developer?: Developer;
}

export interface Developer {
  img: string;
  id: number;
  name: string;

  assigned?: string;
}

export interface Reporter {
  img: string;
  id: number;
  name: string;
  email: string;
}

export interface SeverityData {
  name: 'Severity High' | 'Severity Normal' | 'Severity Low';
  value: number;
}

export interface StatusData {
  name: 'Closed Bugs' | 'Open Bugs' | 'Pending Bugs';
  value: number;
}

export interface BugsStat {
  label: 'All Bugs' | 'Open' | 'Closed' | 'Pending';
  total: number;
  icon: 'bug' | 'folder-open' | 'issues-close' | 'tool';
  description: string;
}

export interface BugReportData {
  name: string;
  value: number;
}

// export interface DasboardBug {
//   id: string;
//   severity: string;
//   created: string;
//   platform: string;
//   reporter: DasboardUser;
//   label: string;
//   status: string | undefined;
//   description: string;
//   developer: DasboardUser;
// }

// export interface DasboardUser {
//   id?: number;
//   img?: string;
//   name?: string;
//   email?: string;
// }

// export enum DasboardSeverity {
//   High = 'High',
//   Low = 'Low',
//   Normal = 'Normal',
// }

// export enum DasboardStatus {
//   Closed = 'closed',
//   Open = 'open',
//   Pending = 'pending',
// }

export interface DashboardBug {
  id: string;
  // severity: DashboardSeverity;
  severity: string;
  created: string;
  platform: string;
  reporter: DashboardDeveloper;
  label: string;
  // status: DashboardStatus;
  status: string;
  description: string;
  // color: DashboardColor;
  color: string;
  ticket: string;
  info: string;
  developer: DashboardDeveloper;
}

export enum DashboardColor {
  Eaa649 = '#eaa649',
  The54A593 = '#54a593',
  The64242C = '#64242c',
}

export interface DashboardDeveloper {
  assigned?: string;
  id?: number;
  img?: string;
  name?: string;
  email?: string;
}
