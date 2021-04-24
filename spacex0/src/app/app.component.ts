import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spacex0';
  visible = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true;
    }, 400);
  }
}
