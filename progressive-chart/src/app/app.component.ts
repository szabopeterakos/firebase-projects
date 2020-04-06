import { Component } from "@angular/core";
import { data } from './data';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "progressive-chart";
  data: any[];
  multi: any[];

  view: any[] = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "Population";

  colorScheme = {
    domain: ["#5AA454", "#A10AA8", "#C7B42C", "#AAAAAA"]
  };

  constructor() {
    Object.assign(this, { data });
  }

  onSelect(event) {
    console.log(event);
  }
}
