import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less'],
})
export class SigninComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public passwordVisible = false;
  public auth = { email: '', password: '' };

  public loginHandler = (): void => {
    console.log(this.auth, 'Sdasdsa das ');
  };
}
