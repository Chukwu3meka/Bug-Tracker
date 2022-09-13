import { Component, OnInit } from '@angular/core';
import { platforms } from 'libs/constants';

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bugs.component.html',
  styleUrls: ['./add-bugs.component.less'],
})
export class AddBugsComponent implements OnInit {
  inputValue: string | null = null;
  textValue: string | null = null;

  public platformOptions = platforms;

  constructor() {}

  ngOnInit(): void {}
}
