import { Component, OnInit } from '@angular/core';

import { colors } from 'libs/constants';
import { Bug, BugsStat, DashboardBug } from 'src/app/interface/Old-Bug';
// import { Bugs } from 'src/app/mock-database';

import { BugsService } from '../../../services/bugs.service';

@Component({
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.less'],
})
export class BugListsComponent implements OnInit {
  public bugs: Bug[] = [];

  // public bugsStat?: BugsStat[];
  public bugsStat?: any;

  public currentPage: number = 1;
  public totalPages: number = 2;

  // public profileData: ProfileData = {};
  public profileData?: any;
  // public bugData: BugData = {};
  public bugData?: any;

  // public dashboardBugs: DashboardBug[] | undefined;
  public dashboardBugs: any[] | undefined;

  public nextPage = (page: string) => {
    if (page === '-' && this.currentPage > 1) {
      this.currentPage -= 1;
      this.getBugs(this.currentPage - 1);
    } else if (page === '+' && this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.getBugs(this.currentPage - 1);
    }
  };

  public closeDrawerHandler = () => {
    this.profileData = undefined;
    this.bugData = undefined;
  };

  public displayProfileHandler = (id?: number): void => {
    // console.log(id);

    if (!id) this.profileData = undefined;
    if (id) this.profileData = {};
  };

  private getBugs = (page: number = 0) => {
    this.bugService.getBugs(page).subscribe((res) => {
      const totalBugs = res.totalElements;
      this.totalPages = res.totalPages;

      const bugs = res.content.map((bug) => ({
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
        allBugs: totalBugs,
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
    });
  };

  public displayBugHandler = (id?: string): void => {
    this.bugService.getBug(id).subscribe((res) => {
      // const totalBugs = res.totalElements;
      // this.totalPages = res.totalPages;

      this.bugData = {
        platformDevelopers: [
          { id: '1', name: 'Clay Robel' },
          { id: '2', name: 'Cathy Shanahan' },
          { id: '3', name: 'Jill Jacobs' },
          { id: '4', name: 'Deanna Bednar' },
          { id: '5', name: 'Lloyd Muller`' },
        ],
        developer: { id: res.id, name: `${res.lastName} ${res.firstName}` },
        title: res.label,
        platform: res.platformses.platformName,
        description: res.bugReview,
        screenshots: [
          'https://placeimg.com/200/200/people',
          '/assets/images/zenith-logo.png',
          '/assets/images/add-bug.png',
          '/assets/images/profilePic.png',
          'https://placeimg.com/200/200/people',
          'https://placeimg.com/200/200/people',
          'https://placeimg.com/200/200/people',
          'https://placeimg.com/200/200/people',
          'https://placeimg.com/200/200/people',
          'https://placeimg.com/200/200/people',
          '/assets/images/zenith-logo.png',
        ],
      };

      // this.currentDeveloper = res.id;

      // }

      // console.log(id, res);
    });

    // if (!id) this.bugData = undefined;
    // if (id) this.bugData = {};
  };

  constructor(private bugService: BugsService) {}

  ngOnInit(): void {
    setTimeout(() => this.getBugs(), 1500);
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
