import { Color, ScaleType } from '@swimlane/ngx-charts';

import { Component, OnInit } from '@angular/core';
import { severityData } from './severityData';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { heatMapData } from './heatMapData';
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
  // single: any[] = [];
  // view: number[] = [500, 400];
  // legend: boolean = true;
  // legendPosition: string = 'below';

  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };

  heatMapData?: any[];
  severityData?: any[];
  view: number[] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  yAxisLabel: string = 'Year';

  // colorScheme: domainColor = {
  //   name: 'color',
  //   domain: ['green', 'green', 'blue'],
  // };

  colorScheme: Color = {
    domain: [colors.high, colors.normal, colors.low],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  heatmapColorScheme: Color = {
    domain: [
      colors.highActivity,
      colors.normalActivity,
      colors.lowActivity,
      colors.noActivity,
    ],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  schemeType: any;
  yDomain = [0, 150];

  // getColors() {
  //   this.colors = new ColorHelper(this.colorScheme, this.schemeType, this.yDomain);
  // }

  // colorScheme = [
  //   // { name: 'Sunday', value: '#febb00' },
  //   // { name: 'Monday', value: '#1dd068' },
  //   // { name: 'Tuesday', value: '#1dd068' },
  //   // { name: 'Wednessday', value: '#febb00' },
  //   // { name: '', value: '#febb00' },
  //   // { name: '', value: '#febb00' },
  //   // { name: '', value: '#febb00' },
  // ];

  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };

  constructor() {
    Object.assign(this, { heatMapData, severityData });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  severityDataSingle?: any[];
  severityDataView: any[] = [500, 400];

  // options
  severityDataShowLegend: boolean = true;
  severityDataShowLabels: boolean = true;

  // colorScheme = [
  //   {
  //     name: 'High',
  //     value: 'red',
  //   },
  //   {
  //     name: 'Normal',
  //     value: 'green',
  //   },
  //   {
  //     name: 'Low',
  //     value: 'black',
  //   },
  // ];

  // onSelect(event) {
  //   console.log(event);
  // }

  // constructor() {
  //   Object.assign(this, { single });
  // }

  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }
}
