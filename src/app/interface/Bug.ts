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
  color?: string;
  ticket?: string;
  info?: string;

  //   label: bug.label,
  //   ticket: `Ticket ID #${bug.id}`,
  //   info: `Reported on ${new Date(bug.created).toDateString()}`,
  //   platform: `Platform: ${bug.platform}`,
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
