import { Component } from '@angular/core';

import { colors } from 'libs/constants';
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
  public profileData: ProfileData = {};
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

  public displayProfileHandler = (id?: number): void => {
    if (!id) this.profileData = {};
    if (id) this.profileData = { id: 1 };
  };

  public displayBugHandler = (id?: string): void => {
    if (!id) this.bugData = {};
    if (id) this.bugData = { id: '2' };
  };
}
