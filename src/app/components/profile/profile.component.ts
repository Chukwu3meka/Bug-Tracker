import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  public profileImg?: string = '/assets/images/profilePic.png';

  public profileData = [
    { title: 'Fullname', data: 'Troy Cormier Glover' },
    {
      title: 'First Signin',
      data: new Date(
        'Tue Jul 19 2022 03:35:22 GMT+0100 (West Africa Standard Time)'
      ).toDateString(),
    },
    { title: 'Contributions', data: 'Reported and resolved 36 Bugs' },
    { title: 'Branch', data: 'Head Office' },
    { title: 'Department', data: 'Cash and Teller' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
