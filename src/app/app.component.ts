import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  // public activeTab?: number;

  // public activeTabHandler = (selectedTab: number) => {
  //   console.log(selectedTab, this.activeTab);
  //   this.activeTab = selectedTab;
  // };

  isCollapsed = false;

  // constructor(private activatedRoute: ActivatedRoute) {
  //   // this.activatedRoute.url.subscribe((currentUrl) => {
  //     // console.log('url is:    ' + currentUrl);
  //     console.log('url is:    ' + window.);
  //   // });
  // }
}
