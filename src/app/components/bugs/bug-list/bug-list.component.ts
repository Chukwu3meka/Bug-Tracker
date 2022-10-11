import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { colors } from 'src/app/libs/appConstants';
import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models';
import { BugsService } from '../../../services/bugs.service';

@Component({
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.less'],
})
export class BugListsComponent implements OnInit {
  public bugs: any = [];
  public bugsStat?: any;
  public currentPage: number = 1;
  public totalPages: number = 2;
  public profileData?: any;
  public bugData?: any;
  public bugId?: string;
  public dashboardBugs: any[] | undefined;
  public constants: Observable<ConstantsModel>;
  public platforms;

  constructor(private store: Store<AppState>, private bugService: BugsService) {
    this.constants = this.store.select('constants');
  }

  ngOnInit(): void {
    this.getBugs();
    this.constants.subscribe((constants) => {
      this.platforms = constants.platforms;
    });
  }

  public nextPage = (page: string) => {
    if (page === '-' && this.currentPage > 1) {
      this.currentPage -= 1;
      this.getBugs(this.currentPage - 1);
    } else if (page === '+' && this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.getBugs(this.currentPage - 1);
    }
  };

  public closeDrawerHandler = () => (this.bugId = undefined);
  public displayProfileHandler = (id?: number): void => {
    // console.log(id);

    if (!id) this.profileData = undefined;
    if (id) this.profileData = {};
  };

  private getBugs = (page: number = 0) => {
    this.bugService.getBugs(page).subscribe((bug) => {
      const totalBugs = bug.totalElements | 20;
      this.totalPages = bug.totalPages | 1;

      // const bugs = bug.content.map((bug) => ({
      const bugs = bug.map((bug) => ({
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
          img: bug.reporter?.img,
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
        title: bug.title,
        reporter: bug.reporter,
        color: colors[bug.status],
        ticket: `Ticket ID #${bug.id}`,
        description: bug.description,

        platform: `Platform: ${
          this.platforms.find((x) => x.id === bug.platform).title
        }`,
        severity: `Severity Status: ${bug?.severity}`,
        info: `Reported on ${new Date(bug.created).toDateString()}`,
        // {
        //   name: '' || 'Unknown User',
        //   id: '' || null,
        //   img: '' || 'https://placeimg.com/100/100/people',
        // },
        developer: {
          id: bug.developer?.id,
          // ...bug.developer,
          assigned: bug.developer?.id
            ? `Assigned to '${bug?.developer?.name}'`
            : `Not yet assigned`,
        },
      }));
    });
  };

  public displayBugHandler = (id?: string): void => {
    this.bugId = id;
    // console.log('DSfsfsd', id);
    // this.bugService.getBug(id).subscribe((res) => {
    //   const bug = res[0];

    //   if (!bug) return;

    //   this.bugData = {
    //     platformDevelopers: [
    //       { id: '1', name: 'Clay Robel' },
    //       { id: '2', name: 'Cathy Shanahan' },
    //       { id: '3', name: 'Jill Jacobs' },
    //       { id: '4', name: 'Deanna Bednar' },
    //       { id: '5', name: 'Lloyd Muller`' },
    //     ],
    //     developer: bug.developer,
    //     title: bug.title,
    //     platform: bug.platform,
    //     description: bug.description,
    //     screenshots: [
    //       'https://placeimg.com/200/200/people',
    //       '/assets/images/zenith-logo.png',
    //       '/assets/images/add-bug.png',
    //       '/assets/images/profilePic.png',
    //       'https://placeimg.com/200/200/people',
    //       'https://placeimg.com/200/200/people',
    //       'https://placeimg.com/200/200/people',
    //       'https://placeimg.com/200/200/people',
    //       'https://placeimg.com/200/200/people',
    //       'https://placeimg.com/200/200/people',
    //       '/assets/images/zenith-logo.png',
    //     ],
    //   };

    //   // this.currentDeveloper = bug.id;

    //   // }

    //   // console.log(id, bug);
    // });

    // if (!id) this.bugData = undefined;
    // if (id) this.bugData = {};
  };
}
