import { Component, OnInit } from '@angular/core';

import { colors } from 'libs/constants';
import { Bug, DashboardBug } from 'src/app/interface/Bug';
import { Bugs } from 'src/app/mock-database';

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

  public profileData: ProfileData = {};
  public bugData: BugData = {};

  public dashboardBugs: DashboardBug[] | undefined;

  public displayProfileHandler = (id?: number): void => {
    if (!id) this.profileData = {};
    if (id) this.profileData = { id: 1 };
  };

  public displayBugHandler = (id?: string): void => {
    if (!id) this.bugData = {};
    if (id) this.bugData = { id: '2' };
  };

  constructor(private bugService: BugsService) {}

  ngOnInit(): void {
    this.bugService.getBugs().subscribe((bugs) => {
      this.dashboardBugs = bugs.map((bug) => ({
        ...bug,
        color: colors[bug.status],
        label: bug.label,
        ticket: `Ticket ID #${bug.id}`,
        info: `Reported on ${new Date(bug.created).toDateString()}`,
        platform: `Platform: ${bug.platform}`,
        severity: `Severity Status: ${bug.severity}`,
        developer: {
          ...bug.developer,
          assigned: bug.developer?.name
            ? `Assigned to '${bug.developer.name}'`
            : `Not yet assigned`,
        },
      }));

      console.log('fdsfdsfs');
    });
  }
}
