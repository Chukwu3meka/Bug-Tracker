import { Component, OnInit } from '@angular/core';
import { colors } from 'libs/constants';
import { ColorScheme } from 'src/app/interface/Charts';
import { Bugs } from 'src/app/mock-bugs';
import { single } from './data';

interface inin {}

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.less'],
})
export class BugsComponent {
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

  // single: any[] = [];
  // view!: [500, 400];

  // // options
  // showLegend: boolean = true;
  // showLabels: boolean = true;

  // colorScheme: ColorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };

  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };

  constructor() {
    Object.assign(this, { single });
  }

  single: any[] = [];
  // view: number[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
