import { Component, AfterViewInit } from "@angular/core";
// import { MDCRipple } from "@material/ripple/index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements AfterViewInit {
  title = "security";
  // ripple = new MDCRipple(document.querySelector(".foo-button"));
  ngAfterViewInit(): void {
    // mdc.ripple.MDCRipple.attachTo(document.querySelector(".foo-button"));
  }
}
