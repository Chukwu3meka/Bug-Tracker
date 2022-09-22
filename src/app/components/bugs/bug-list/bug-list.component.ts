import { Component } from '@angular/core';

import { colors } from 'libs/constants';
import { Bug, Developer } from 'src/app/interface/Bug';
import { Bugs } from 'src/app/mock-database';

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
export class BugListsComponent {
  public profileData: ProfileData = { id: undefined };
  public bugData: BugData = {};

  public appBugs = Bugs.map((bug) => ({
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

  public displayProfileHandler = (id?: number) => {
    if (id) {
      this.profileData = { id: 1 };
    } else {
      this.profileData = {};
    }
  };

  public displayBugHandler = (id?: string) => {
    if (id) {
      console.log(id);
      this.bugData = { id: '2' };
    } else {
      this.bugData = {};
    }
  };
}
