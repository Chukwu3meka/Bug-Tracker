import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-bug-stat',
  templateUrl: './bug-stat.component.html',
  styleUrls: ['./bug-stat.component.less'],
})
export class BugStatComponent implements OnInit {
  @Input() bugsStat?: any;
  private role: string = 'user';

  public bugs: any[] = [
    {
      label: 'All Bugs',
      total: undefined,
      icon: 'bug',
      description:
        this.role === 'admin'
          ? 'Total number of Bugs reported by all users'
          : this.role === 'developer'
          ? 'Total number of Bugs assigned to me'
          : 'Total number of Bugs reported by me',
    },
    {
      label: 'Open',
      total: undefined,
      icon: 'folder-open',
      description: `Bugs yet to be assigned to a developer`,
    },
    {
      label: 'Closed',
      total: undefined,
      icon: 'issues-close',
      description: 'Bugs that has been Resolved or Closed ',
    },
    {
      label: 'Pending',
      total: undefined,
      icon: 'tool',
      description: 'Bugs currently being fixed by developers',
    },
  ];

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {
    if (typeof this.bugsStat !== 'undefined') {
      this.bugs[0].total = this.bugsStat.allBugs;
      this.bugs[1].total = this.bugsStat.open;
      this.bugs[2].total = this.bugsStat.closed;
      this.bugs[3].total = this.bugsStat.pending;
    }
  }
}
