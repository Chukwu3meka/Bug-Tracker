import { Component } from '@angular/core';

import { colors } from 'libs/constants';
import { Bugs } from 'src/app/mock-bugs';

@Component({
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.less'],
})
export class BugListsComponent {
  private role = 'user';

  public appBugs = Bugs.map((bug) => ({
    ...bug,
    color: colors[bug.status],
    label: bug.label,
    ticket: `Ticket ID #${bug.id}`,
    info: `Reported on ${new Date(bug.created).toDateString()}`,
    platform: `Platform or Application: ${bug.platform}`,
    severity: `Severity Status: ${bug.severity}`,
    developer: bug.developer
      ? `Assigned to ${bug.developer.name}`
      : `Not yet assigned`,
  }));

  public bugsStat = [
    {
      label: 'All Bugs',
      total: 200,
      icon: 'bug',
      description: `Total number of Bugs reported by ${
        this.role === 'user' ? 'me' : 'users'
      }`,
    },
    {
      label: 'Open',
      total: 31,
      icon: 'folder-open',
      description: `All Bugs yet to be assigned to a developer`,
    },
    {
      label: 'Closed',
      total: 47,
      icon: 'issues-close',
      description: 'Bugs that has been Resolved or Closed ',
    },
    {
      label: 'Pending',
      total: 93,
      icon: 'tool',
      description: 'Bugs currently being fixed by developers',
    },
  ];
}
