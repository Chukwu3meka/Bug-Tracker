import { Component } from '@angular/core';

import { colors } from 'libs/constants';
import { Bug, Developer } from 'src/app/interface/Bug';
import { Bugs } from 'src/app/mock-database';

@Component({
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.less'],
})
export class BugListsComponent {
  public profileData: Developer = { id: undefined };

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
      console.log(id);
    } else {
      this.profileData = {};
    }
  };
}
