import { Color, ScaleType } from '@swimlane/ngx-charts';

export interface ColorScheme {
  name?: string;
  selectable?: boolean;
  group?: ScaleType;
  domain: string[];
}
