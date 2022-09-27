import { Component, Input } from '@angular/core';

import { BugsStat } from 'src/app/interface/Bug';

@Component({
  selector: 'app-bug-stat',
  templateUrl: './bug-stat.component.html',
  styleUrls: ['./bug-stat.component.less'],
})
export class BugStatComponent {
  @Input() bugsStat?: BugsStat[];
}
