import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-stat',
  templateUrl: './bug-stat.component.html',
  styleUrls: ['./bug-stat.component.less'],
})
export class BugStatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  private role: string = 'user';

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