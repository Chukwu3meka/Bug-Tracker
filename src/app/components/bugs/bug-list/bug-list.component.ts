import { Component, OnInit } from '@angular/core';

import { colors } from 'libs/constants';
import { Bug, BugsStat, DashboardBug } from 'src/app/interface/Old-Bug';
// import { Bugs } from 'src/app/mock-database';

import { BugsService } from '../../../services/bugs.service';

export interface bugInterface {
  color: any;
  label: string;
  ticket: string;
  info: string;
  platform: string;
  severity: string;
  developer: {
    assigned: string;
    img?: string | undefined;
    id?: number | undefined;
    name?: string | undefined;
  };
  //  ... 4 more ...;
  description: string;
  //  }
  //  []' is not assignable to type 'never[]'
}

interface ProfileData {
  img?: string;
  id?: number;
  name?: string;
}

interface BugData {
  id?: string;
}

@Component({
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.less'],
})
export class BugListsComponent implements OnInit {
  public bugs: Bug[] = [];

  // public bugsStat?: BugsStat[];
  public bugsStat?: any;

  public profileData: ProfileData = {};
  // public bugData: BugData = {};
  public bugData: BugData = {};

  // public dashboardBugs: DashboardBug[] | undefined;
  public dashboardBugs: any[] | undefined;

  public displayProfileHandler = (id?: number): void => {
    console.log(id);

    if (!id) this.profileData = {};
    if (id) this.profileData = { id: 1 };
  };

  public displayBugHandler = (id?: string): void => {
    console.log(id);
    if (!id) this.bugData = {};
    if (id) this.bugData = { id: '2' };
  };

  constructor(private bugService: BugsService) {}

  ngOnInit(): void {
    this.bugService.getBugs().subscribe((res) => {
      setTimeout(() => {
        const bugs = tempMockResponse.map((bug) => ({
          ...bug,
          id: bug.bugId,
          description: bug.bugReview,
          status: bug.bugTreatmentStage?.toLowerCase(),
          severity: bug.severity?.toLowerCase(),
          created: bug.reportDate,
          platform: bug.platformses?.platformName,
          developer: {
            id: bug.userAssignedToBug?.id,
            name: `${bug.userAssignedToBug?.lastName} ${bug.userAssignedToBug?.firstName}`,
          },
        }));

        this.bugsStat = {
          allBugs: bugs.length,
          open: bugs.filter((bug) => bug.status === 'open').length,
          closed: bugs.filter((bug) => bug.status === 'closed').length,
          pending: bugs.filter((bug) => bug.status === 'pending').length,
        };

        this.dashboardBugs = bugs.map((bug) => ({
          id: bug.id,
          label: bug.label,
          description: bug.description,
          color: colors[bug.status],
          ticket: `Ticket ID #${null}`,
          info: `Reported on ${new Date(bug.created).toDateString()}`,
          platform: `Platform: ${bug?.platform}`,
          severity: `Severity Status: ${bug?.severity}`,
          reporter: {
            name: '' || 'Unknown User',
            id: '' || null,
            img: '' || 'https://placeimg.com/100/100/people',
          },
          developer: {
            id: bug.developer.id,
            // ...bug.developer,
            assigned: bug.developer?.id
              ? `Assigned to '${bug?.developer.name}'`
              : `Not yet assigned`,
          },
        }));
      }, 3000);
    });
  }
}

const tempMockResponse = [
  {
    bugId: 1,
    label: 'Wisdom Donald',
    createdBy: null,
    approvedBy: null,
    approvedDate: null,
    assignedTo: null,
    assignedDate: '2022-09-26',
    reportDate: '2022-09-22',
    lastUpdate: '2022-09-26',
    severity: 'LOW',
    enumSeverity: null,
    bugTreatmentStage: 'OPEN',
    progressStatus: 'APPROVED',
    bugReview: 'The app no dey work',
    platformses: {
      platformId: 1,
      platformName: 'Mobile App',
    },
    userAssignedToBug: {
      id: 5,
      email: 'steverogers@hotmail.com',
      password: null,
      firstName: 'Steve',
      lastName: 'Rogers',
      photos: null,
      enabled: true,
      roles: {
        roleId: 2,
        name: 'Developer',
      },
      photosImagePath: '/images/default-user.png',
    },
  },
  {
    bugId: 2,
    label: 'Ultron',
    createdBy: null,
    approvedBy: null,
    approvedDate: null,
    assignedTo: null,
    assignedDate: '2022-09-27',
    reportDate: '2022-09-22',
    lastUpdate: '2022-09-27',
    severity: 'LOW',
    enumSeverity: null,
    bugTreatmentStage: 'OPEN',
    progressStatus: 'APPROVED',
    bugReview: 'Inability to log in',
    platformses: null,
    userAssignedToBug: {
      id: 3,
      email: 'douyevictor@gmail.com',
      password: null,
      firstName: 'Douye',
      lastName: 'Victor',
      photos: null,
      enabled: true,
      roles: {
        roleId: 2,
        name: 'Developer',
      },
      photosImagePath: '/images/default-user.png',
    },
  },
  {
    bugId: 7,
    label: 'Senior Man',
    createdBy: null,
    approvedBy: null,
    approvedDate: null,
    assignedTo: null,
    assignedDate: '2022-09-27',
    reportDate: '2022-09-26',
    lastUpdate: '2022-09-27',
    severity: 'LOW',
    enumSeverity: null,
    bugTreatmentStage: 'OPEN',
    progressStatus: 'APPROVED',
    bugReview: 'Wahala Dey o',
    platformses: {
      platformId: 3,
      platformName: 'XPaths',
    },
    userAssignedToBug: {
      id: 5,
      email: 'steverogers@hotmail.com',
      password: null,
      firstName: 'Steve',
      lastName: 'Rogers',
      photos: null,
      enabled: true,
      roles: {
        roleId: 2,
        name: 'Developer',
      },
      photosImagePath: '/images/default-user.png',
    },
  },
  {
    bugId: 8,
    label: 'Gorillas',
    createdBy: null,
    approvedBy: null,
    approvedDate: null,
    assignedTo: null,
    assignedDate: '2022-09-27',
    reportDate: '2022-09-26',
    lastUpdate: '2022-09-27',
    severity: 'LOW',
    enumSeverity: null,
    bugTreatmentStage: 'OPEN',
    progressStatus: 'APPROVED',
    bugReview: 'Repair this thing',
    platformses: {
      platformId: 2,
      platformName: 'Internet Banking',
    },
    userAssignedToBug: {
      id: 2,
      email: 'brucebanner@gmail.com',
      password: null,
      firstName: 'Bruce',
      lastName: 'Banner',
      photos: null,
      enabled: true,
      roles: {
        roleId: 2,
        name: 'Developer',
      },
      photosImagePath: '/images/default-user.png',
    },
  },
  {
    bugId: 9,
    label: 'Wiziwaxx',
    createdBy: null,
    approvedBy: null,
    approvedDate: null,
    assignedTo: null,
    assignedDate: '2022-09-27',
    reportDate: '2022-09-26',
    lastUpdate: '2022-09-27',
    severity: 'LOW',
    enumSeverity: null,
    bugTreatmentStage: 'OPEN',
    progressStatus: 'APPROVED',
    bugReview: 'Wahala Dey oh',
    platformses: {
      platformId: 1,
      platformName: 'Mobile App',
    },
    userAssignedToBug: {
      id: 3,
      email: 'douyevictor@gmail.com',
      password: null,
      firstName: 'Douye',
      lastName: 'Victor',
      photos: null,
      enabled: true,
      roles: {
        roleId: 2,
        name: 'Developer',
      },
      photosImagePath: '/images/default-user.png',
    },
  },
  {
    bugId: 10,
    label: 'Wisdom Don',
    createdBy: null,
    approvedBy: null,
    approvedDate: null,
    assignedTo: null,
    assignedDate: '2022-09-27',
    reportDate: '2022-09-26',
    lastUpdate: '2022-09-27',
    severity: 'LOW',
    enumSeverity: null,
    bugTreatmentStage: 'OPEN',
    progressStatus: 'APPROVED',
    bugReview: 'Look what you did',
    platformses: {
      platformId: 6,
      platformName: 'Funds Transfer',
    },
    userAssignedToBug: {
      id: 5,
      email: 'steverogers@hotmail.com',
      password: null,
      firstName: 'Steve',
      lastName: 'Rogers',
      photos: null,
      enabled: true,
      roles: {
        roleId: 2,
        name: 'Developer',
      },
      photosImagePath: '/images/default-user.png',
    },
  },
  {
    bugId: 11,
    label: 'Haaland Erin',
    createdBy: null,
    approvedBy: null,
    approvedDate: null,
    assignedTo: null,
    assignedDate: '2022-09-27',
    reportDate: '2022-09-26',
    lastUpdate: '2022-09-27',
    severity: 'LOW',
    enumSeverity: null,
    bugTreatmentStage: 'OPEN',
    progressStatus: 'APPROVED',
    bugReview: 'Wahala Dey oh',
    platformses: {
      platformId: 2,
      platformName: 'Internet Banking',
    },
    userAssignedToBug: {
      id: 3,
      email: 'douyevictor@gmail.com',
      password: null,
      firstName: 'Douye',
      lastName: 'Victor',
      photos: null,
      enabled: true,
      roles: {
        roleId: 2,
        name: 'Developer',
      },
      photosImagePath: '/images/default-user.png',
    },
  },
  {
    bugId: 12,
    label: 'Haaland Erin',
    createdBy: null,
    approvedBy: null,
    approvedDate: null,
    assignedTo: null,
    assignedDate: null,
    reportDate: '2022-09-28',
    lastUpdate: null,
    severity: null,
    enumSeverity: null,
    bugTreatmentStage: 'OPEN',
    progressStatus: 'INITIATED',
    bugReview: 'Wahala Dey oh',
    platformses: {
      platformId: 3,
      platformName: 'XPaths',
    },
    userAssignedToBug: null,
  },
];
