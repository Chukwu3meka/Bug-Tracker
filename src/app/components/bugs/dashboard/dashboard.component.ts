import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

import { Component, OnInit } from '@angular/core';
import { bugReportData, severityData, statusData } from './data';
import { colors, profile } from 'libs/constants';
import { BugsService } from 'src/app/services/bugs.service';
import { BugReportData, BugsStat, SeverityData, StatusData } from 'src/app/interface/Bug';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  private role: string = 'user';
  constructor(private bugService: BugsService) {
    this.role = profile.role;

    Object.assign(this, { statusData, severityData, bugReportData });
  }

  public bugsStat?: BugsStat[];
  public severityData?: SeverityData[];
  public bugReportData?: BugReportData[];
  public statusData?: StatusData[];

  public pieChart = {
    legendPosition: LegendPosition.Below,
  };

  public bugReportColorScheme: Color = {
    domain: [colors.primary],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  public severityColors: Color = {
    domain: [colors.high, colors.normal, colors.low],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  public gaugeColors: Color = {
    domain: [colors.closed, colors.primary, colors.pending],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  ngOnInit(): void {
    this.bugService.getBugs().subscribe((bugs) => {
      this.statusData = [
        {
          name: 'Closed Bugs',
          value: bugs.filter((bug) => bug.status === 'closed').length,
        },
        {
          name: 'Open Bugs',
          value: bugs.filter((bug) => bug.status === 'open').length,
        },
        {
          name: 'Pending Bugs',
          value: bugs.filter((bug) => bug.status === 'pending').length,
        },
      ];

      this.severityData = [
        {
          name: 'Severity High',
          value: bugs.filter((bug) => bug.severity === 'high').length,
        },
        {
          name: 'Severity Normal',
          value: bugs.filter((bug) => bug.severity === 'normal').length,
        },
        {
          name: 'Severity Low',
          value: bugs.filter((bug) => bug.severity === 'low').length,
        },
      ];

      this.bugsStat = [
        {
          label: 'All Bugs',
          total: bugs.length,
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
          total: bugs.filter((bug) => bug.status === 'open').length,
          icon: 'folder-open',
          description: `All Bugs yet to be assigned to a developer`,
        },
        {
          label: 'Closed',
          total: bugs.filter((bug) => bug.status === 'closed').length,
          icon: 'issues-close',
          description: 'Bugs that has been Resolved or Closed ',
        },
        {
          label: 'Pending',
          total: bugs.filter((bug) => bug.status === 'pending').length,
          icon: 'tool',
          description: 'Bugs currently being fixed by developers',
        },
      ];
    });
  }
}
