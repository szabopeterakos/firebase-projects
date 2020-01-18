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
  startTimestamps = [1518_4800_6000_0, 1518_5196_0000_0, 1518_5610_0000_0];

  ngOnInit(): void {
    this.times[0] = moment_tz(this.startTimestamps[0])
      .tz("UTC")
      .format(this.DATE_FORMAT);
    this.times[1] = moment_tz(this.startTimestamps[1])
      .tz("UTC")
      .format(this.DATE_FORMAT);
    this.times[2] = moment_tz(this.startTimestamps[2])
      .tz("UTC")
      .format(this.DATE_FORMAT);

    this.timesAmerica[0] = moment_tz(this.startTimestamps[0])
      .tz("America/New_York")
      .format(this.DATE_FORMAT);
    this.timesAmerica[1] = moment_tz(this.startTimestamps[1])
      .tz("America/New_York")
      .format(this.DATE_FORMAT);
    this.timesAmerica[2] = moment_tz(this.startTimestamps[2])
      .tz("America/New_York")
      .format(this.DATE_FORMAT);

    this.timesVladi[0] = moment_tz(this.startTimestamps[0])
      .tz("Asia/Vladivostok")
      .format(this.DATE_FORMAT);
    this.timesVladi[1] = moment_tz(this.startTimestamps[1])
      .tz("Asia/Vladivostok")
      .format(this.DATE_FORMAT);
    this.timesVladi[2] = moment_tz(this.startTimestamps[2])
      .tz("Asia/Vladivostok")
      .format(this.DATE_FORMAT);
  }

  title = "moments";
  times = [];
  timesAmerica = [];
  timesVladi = [];
}
