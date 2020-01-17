import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import * as moment_tz from "moment-timezone";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  DATE_FORMAT = "YYYY.MM.DD HH:mm Z";
  ngOnInit(): void {
    this.times[0] = moment().format(this.DATE_FORMAT);
    this.times[1] = moment_tz()
      .tz("America/New_York")
      .format(this.DATE_FORMAT);
    this.times[2] = moment().format(this.DATE_FORMAT);
  }

  title = "moments";
  times = [];
}
