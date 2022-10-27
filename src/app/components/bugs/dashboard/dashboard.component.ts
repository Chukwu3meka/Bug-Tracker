import { Component, OnInit } from '@angular/core';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';

import {
  StatusData,
  SeverityData,
  DailyBugReport,
} from 'src/app/interface/Old-Bug';
import { colors } from 'src/app/libs/appConstants';
import { BugsService } from 'src/app/services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  constructor(private bugService: BugsService) {}

  public bugsStat?: any;
  public statusData?: StatusData[];
  public severityData?: SeverityData[];
  public dailyBugReport?: DailyBugReport[];
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
    this.bugService.getAllBugs().subscribe((res) => {
      const bugs = res.map((x) => ({
        status:
          x.bugTreatmentStage === 'OPEN'
            ? 'open'
            : x.bugTreatmentStage === 'CLOSED'
            ? 'closed'
            : 'pending',
        severity:
          x.enumSeverity === 'LOW'
            ? 'low'
            : x.enumSeverity === 'MEDIUM'
            ? 'medium'
            : 'high',
        date: new Date(x.reportDate).toDateString(),
      }));

      const noOfDays = 20;
      const dailyReport: any = [];
      for (let day = 0; day < noOfDays; day++) {
        const dateOffset = 24 * 60 * 60 * 1000 * day; //5 days
        const todaysDate = new Date();
        todaysDate.setTime(todaysDate.getTime() - dateOffset);

        const todaysDateString = new Date(todaysDate).toDateString();

        dailyReport.push({
          name: todaysDateString,
          value: bugs.filter((x) => x.date === todaysDateString).length || 0.01,
        });
      }

      this.dailyBugReport = dailyReport;

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
