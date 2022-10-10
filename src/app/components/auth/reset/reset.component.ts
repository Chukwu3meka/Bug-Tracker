import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.less'],
})
export class ResetComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  public resetStage = false;

  passwordVisible = false;
  resetLoading: boolean = false;
  email: string = '';

  public resetPassword = () => {
    if (this.email.includes('@')) {
      this.resetLoading = true;
      this.resetStage = true;

      this.usersService.reset(this.email).subscribe((res) => {});

      this.resetLoading = false;
    }
    console.log('reset resetPassword 1');
  };
}
