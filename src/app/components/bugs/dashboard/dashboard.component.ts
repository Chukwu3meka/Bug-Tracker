import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { bugReportData, severityData, gaugeData } from './data';
import { colors } from 'libs/constants';

// export interface Color {
//   name?: string;
//   selectable?: boolean;
//   group?: ScaleType;
//   domain: string[];
// }

// export interface domainColor {
//   name?: string;
//   domain: string[];
//   selectable?: boolean;
//   group?: ScaleType;
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  constructor() {
    Object.assign(this, { gaugeData, severityData, bugReportData });
    // console.log(gaugeData);
  }

  legendPosition: LegendPosition = LegendPosition.Below;

  severityData?: any[];
  bugReportData?: any[];
  gaugeData!: any[];

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
