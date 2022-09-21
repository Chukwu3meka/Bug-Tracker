import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

import { Component } from '@angular/core';
import { bugReportData, severityData, statusData } from './data';
import { colors } from 'libs/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  constructor() {
    Object.assign(this, { statusData, severityData, bugReportData });
    // console.log(statusData);
  }

  legendPosition: LegendPosition = LegendPosition.Below;

  severityData?: any[];
  bugReportData?: any[];
  statusData!: any[];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  // options
  bugReportShowXAxis = true;
  bugReportShowYAxis = true;
  bugReportGradient = false;
  bugReportShowLegend = true;
  bugReportShowXAxisLabel = true;
  bugReportXAxisLabel = 'Country';
  bugReportShowYAxisLabel = true;
  bugReportYAxisLabel = 'Population';

  bugReportColorScheme: Color = {
    domain: [colors.primary],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  severityColors: Color = {
    domain: [colors.high, colors.normal, colors.low],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  gaugeColors: Color = {
    domain: [colors.closed, colors.primary, colors.pending],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };
}
