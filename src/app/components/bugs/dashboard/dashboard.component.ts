import { colors } from 'libs/constants';
import { Component, OnInit } from '@angular/core';
import { BugsService } from 'src/app/services/bugs.service';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';

import {
  DailyBugReport,
  BugsStat,
  SeverityData,
  StatusData,
} from 'src/app/interface/Old-Bug';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  private role: string = 'user';
  constructor(private bugService: BugsService) {
    // Put the object into storage
    // // Retrieve the object from storage
    // var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
    // this.role = initStore.profile.role;
  }

  public bugsStat?: any;
  public statusData?: StatusData[];
  public severityData?: SeverityData[];
  public bugReportData?: DailyBugReport[];

  public chartOptions = {
    legendPosition: LegendPosition.Below,

    bugReportColorScheme: {
      domain: [colors.primary],
      group: ScaleType.Ordinal,
      selectable: true,
      name: 'Customer Usage',
    },

    severityColors: {
      domain: [colors.high, colors.normal, colors.low],
      group: ScaleType.Ordinal,
      selectable: true,
      name: 'Customer Usage',
    },

    gaugeColors: {
      domain: [colors.closed, colors.primary, colors.pending],
      group: ScaleType.Ordinal,
      selectable: true,
      name: 'Customer Usage',
    },
  };

  ngOnInit(): void {
    this.bugService
      .getDailyBugReport()
      .subscribe((bugReportData) => (this.bugReportData = bugReportData));
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
      this.bugsStat = {
        allBugs: bugs.length,
        open: bugs.filter((bug) => bug.status === 'open').length,
        closed: bugs.filter((bug) => bug.status === 'closed').length,
        pending: bugs.filter((bug) => bug.status === 'pending').length,
      };
    });
  }
}
