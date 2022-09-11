import { Component, OnInit, HostListener } from '@angular/core';
// import { colors } from 'src/lib/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  private lastScrollTop: number = 0;

  value?: string;

  public headerHidden: boolean = false;
  public appLogo: string = '/assets/images/zenith_logo.png';

  public selectedTab: number = 2;

  public profilePicture?: string = '//joeschmoe.io/api/v1/random';

  public tabs: Array<{ name: string; icon: string }> = [
    { name: 'Bugs', icon: 'bug' },
    { name: 'Add Bugs', icon: 'file-add' },
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Feedback', icon: 'wechat' },
    { name: 'Profile', icon: 'user' },
  ];

  public switchTabHandler = (activeTab: number) => {
    console.log({ activeTab, s: this.selectedTab });
    this.selectedTab = activeTab;
  };

  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.headerHidden = !(verticalOffset < this.lastScrollTop);
    this.lastScrollTop = verticalOffset;
  }

  constructor() {
    // console.log('header is available');
  }

  ngOnInit(): void {}
}
