import { Component, OnInit } from '@angular/core';
import lax from 'lax.js';
// https://stackoverflow.com/questions/56688893/how-to-use-a-module-when-it-could-not-find-a-declaration-file
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'parlax-lax0';

  ngOnInit(): void {
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY;
    });

    // Add animation bindings to elements
    lax.addElements('.selector', {
      scrollY: { // The name of the driver you want to use as a source of values to map to your animation, for example, the document's scrollY position.
        translateX: [ // The name of the CSS property you want to animate, for example opacity or rotate.
          ['elInX', 'elCenterY', 'elOutY'],
          [0, 0, 'screenWidth/3'],
        ],
      },
    },{
      style: {
        transform: '200ms scale ease-in-out'
      }
    });
  }
}


