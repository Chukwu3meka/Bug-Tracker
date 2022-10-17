// to detect scroll
import { Component, OnInit, HostListener } from '@angular/core';

private lastScrollTop: number = 0;


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



