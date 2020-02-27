import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tutorial",
  templateUrl: "./tutorial.component.html",
  styleUrls: ["./tutorial.component.sass"]
})
export class TutorialComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      if (this.notifications >= 100) {
        this.notifications = 0;
      }
      this.notifications += 10;
    }, 500);
  }
  title = "material-demo";
  notifications = 0;
  showSpinner = false;
  increment() {
    this.notifications++;
    console.log(this.notifications);
  }
}
