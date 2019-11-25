import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.less']
})
export class CenterComponent implements OnInit {
  title = 'footballer';
  eventDate = 'event date:';
  date = '1990-03-23';
  constructor() { }

  ngOnInit() {
  }

}
