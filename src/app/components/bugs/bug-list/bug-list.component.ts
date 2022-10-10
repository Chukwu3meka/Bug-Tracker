import { Component, OnInit } from '@angular/core';

import { colors } from 'src/app/libs/appConstants';
// import { Bug, BugsStat, DashboardBug } from 'src/app/interface/Old-Bug';
// import { Bugs } from 'src/app/mock-database';

import { BugsService } from '../../../services/bugs.service';

@Component({
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.less'],
})
export class BugListsComponent implements OnInit {
  // public bugs: Bug[] = [];
  public bugs: any = [];

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
      const totalBugs = res.totalElements | 20;
      this.totalPages = res.totalPages | 1;

      // const bugs = res.content.map((bug) => ({
      const bugs = res.map((bug) => ({
        // ...bug,
        // id: bug.bugId,
        // description: bug.bugReview,
        // status: bug.bugTreatmentStage?.toLowerCase(),
        // severity: bug.severity?.toLowerCase(),
        // created: bug.reportDate,
        // platform: bug.platformses?.platformName,
        // developer: {
        //   id: bug.userAssignedToBug?.id,
        //   name: `${bug.userAssignedToBug?.lastName} ${bug.userAssignedToBug?.firstName}`,
        // },

        ...bug,
        developer: {
          id: bug.developer?.id,
          name: bug.developer?.name,
        },
        reporter: {
          id: bug.reporter?.id,
          name: bug.reporter?.name,
        },
      }));

      // console.log(bugs);

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
        reporter: bug.reporter,
        // {
        //   name: '' || 'Unknown User',
        //   id: '' || null,
        //   img: '' || 'https://placeimg.com/100/100/people',
        // },
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
