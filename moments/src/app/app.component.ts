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
  // 2018-02-13
  ngOnInit(): void {
    this.times[0] = moment_tz(1518480060000)
      .tz("UTC")
      .format(this.DATE_FORMAT);
    this.times[1] = moment_tz(1518519600000)
      .tz("UTC")
      .format(this.DATE_FORMAT);
    this.times[2] = moment_tz(1518561000000)
      .tz("UTC")
      .format(this.DATE_FORMAT);
  }

  title = "moments";
  times = [];
}
