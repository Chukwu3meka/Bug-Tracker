import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { colors } from 'src/app/source/appConstants';
import { AppState } from 'src/app/store/app.state';
import { ConstantsModel } from 'src/app/store/models';
import { BugsService } from '../../../services/bugs.service';

@Component({
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss'],
})
export class BugListsComponent implements OnInit {
  public platforms;
  public bugData?: any;
  // public bugId?: string;
  public bugId?: string = '1';
  public bugsStat?: any;
  public profileData?: any;
  public totalPages: number = 1;
  public currentPage: number = 1;
  public dashboardBugs: any[] = [];
  public constants: Observable<ConstantsModel>;

  constructor(private store: Store<AppState>, private bugService: BugsService) {
    this.constants = this.store.select('constants');
  }

  ngOnInit(): void {
    this.constants.subscribe((constants) => {
      this.platforms = constants.platforms;
    });

    this.bugService.getAllBugs().subscribe((res) => {
      this.bugsStat = {
        allBugs: res.length,
        open: res.filter((bug) => bug.bugTreatmentStage === 'OPEN').length,
        closed: res.filter((bug) => bug.bugTreatmentStage === 'CLOSED').length,
        pending: res.filter((bug) => bug.bugTreatmentStage === 'PENDING')
          .length,
      };
    });

    this.getBugs();
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
    if (!id) this.profileData = undefined;
    if (id) this.profileData = {};
  };

  private getBugs = (page: number = 0) => {
    this.bugService.getBugs(page).subscribe((bug) => {
      this.totalPages = bug.totalPages || 1;

      this.dashboardBugs = bug.content.map((bug) => {
        const id = bug.bugId,
          severity = bug.enumSeverity?.toLowerCase(),
          status = bug.bugTreatmentStage?.toLowerCase(),
          fullname = `${bug.userAssignedToBug?.lastName} ${bug.userAssignedToBug?.firstName}`;

        return {
          id,
          status,
          title: bug.label,
          created: bug.reportDate,
          description: bug.bugReview,
          developer: {
            id: bug.userAssignedToBug?.id,
            name: fullname,
            assigned: bug.developer?.id
              ? `Assigned to '${fullname}'`
              : `Not yet assigned`,
          },
          reporter: {
            id: bug.createdBy,
            name: '' || 'Unknown User',
            img: '' || 'https://placeimg.com/100/100/people',
          },
          color: colors[status],
          ticket: `Ticket ID #${id}`,
          platform: `Platform: ${
            this.platforms.find((x) => x.id === bug.platformses?.platformId)
              ?.title
          }`,
          severity: `Severity Status: ${severity.toUpperCase()}`,
          info: `Reported on ${new Date(bug.reportDate).toDateString()}`,
        };
      });
    });
  };

  public displayBugHandler = (id?: string) => (this.bugId = id);
}
