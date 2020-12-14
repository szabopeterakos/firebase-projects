import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.css']
})
export class ScrollupComponent {


  constructor() { }

  scrollToTop() {
    const selector = ".longDiv";
    (function smoothscroll() {

      var currentScroll = document.documentElement.querySelector(selector).scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        document.documentElement.querySelector(selector).scrollTo(0, currentScroll - (currentScroll / 8));
      }

    })();
  }
}
