import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public activeTab: number = 2;

  public activeTabHandler = (selectedTab: number) => {
    console.log(selectedTab, this.activeTab);
    this.activeTab = selectedTab;
  };

  isCollapsed = false;
}
