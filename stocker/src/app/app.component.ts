import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "stocker";
  messages$;
  data$;

  constructor(appService: AppService) {
    this.messages$ = appService.message$;
    this.data$ = appService.data$;
  }
}
