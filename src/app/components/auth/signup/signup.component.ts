import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  passwordVisible = false;
  password?: string;
  email?: string;

  // {
  //   "id": 20220001,
  //   "img": "https://placeimg.com/100/100/people",
  //   "name": "Roxanne Nicolas",
  //   "dateCreated": "Thu Dec 16 2021 12:50:30 GMT+0100 (West Africa Standard Time)",
  //   "department": 1,
  //   "team": 1,
  //   "password": "7777",
  // "role": "admin",
  //   "email": "admin@alienforest.com"
  // },
}
