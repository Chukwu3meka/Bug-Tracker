import { Component, OnInit, HostListener } from '@angular/core';
// import { colors } from 'src/lib/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  private lastScrollTop: number = 0;
  public headerHidden: boolean = false;

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
