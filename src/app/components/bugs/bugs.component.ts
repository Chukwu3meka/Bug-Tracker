import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.less'],
})
export class BugsComponent implements OnInit {
  private role = 'user';
  private bugsCount = {
    totalBugs: 200,
    open: 31,
    closed: 47,
    pending: 93,
  };

  public bugsStat = [
    {
      label: 'All Bugs',
      total: this.bugsCount?.totalBugs,
      icon: 'bug',
      description: `Total number of Bugs reported by ${
        this.role === 'user' ? 'me' : 'users'
      }`,
    },
    {
      label: 'Open',
      total: this.bugsCount?.open,
      icon: 'folder-open',
      description: `All Bugs yet to be assigned to a developer`,
    },
    {
      label: 'Closed',
      total: this.bugsCount?.closed,
      icon: 'issues-close',
      description: 'Bugs that has been Resolved or Closed ',
    },

    // <span nz-icon nzType="fullscreen" nzTheme="outline"></span>
    // <span nz-icon nzType="laptop" nzTheme="outline"></span>

    // <span nz-icon nzType="tool" nzTheme="twotone"></span>

    {
      label: 'Pending',
      total: this.bugsCount?.pending,
      icon: 'tool',
      description: 'Bugs currently being fixed by developers',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
