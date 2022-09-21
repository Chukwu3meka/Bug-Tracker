import { Component } from '@angular/core';

import { colors } from 'libs/constants';
import { Bugs } from 'src/app/mock-bugs';

@Component({
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.less'],
})
export class BugListsComponent {
  public appBugs = Bugs.map((bug) => ({
    ...bug,
    color: colors[bug.status],
    label: bug.label,
    ticket: `Ticket ID #${bug.id}`,
    info: `Reported on ${new Date(bug.created).toDateString()}`,
    platform: `Platform: ${bug.platform}`,
    severity: `Severity Status: ${bug.severity}`,
    developer: bug.developer
      ? `Assigned to ${bug.developer.name}`
      : `Not yet assigned`,
  }));
}
