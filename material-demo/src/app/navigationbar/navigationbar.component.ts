import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigationbar",
  templateUrl: "./navigationbar.component.html",
  styleUrls: ["./navigationbar.component.sass"]
})
export class NavigationbarComponent implements OnInit {
  opened = false;
  constructor() {}

  ngOnInit() {}

  log(state) {
    console.log("state:", state);
  }
}
