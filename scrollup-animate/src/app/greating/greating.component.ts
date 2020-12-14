import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greating',
  templateUrl: './greating.component.html',
  styleUrls: ['./greating.component.css']
})
export class GreatingComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
