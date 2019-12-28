import { Component, OnInit, Input } from "@angular/core";
import { EventbusService } from "../eventbus.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.less"]
})
export class ModalComponent implements OnInit {
  constructor(private eventService: EventbusService) {}
  hide = true;
  text = "notificaiton page";

  ngOnInit() {
    this.eventService.on("notificaitonPage", data => {
      console.log("data:", data);
      this.hide = !data;
    });
  }

  handleClick() {
    this.hide = true;
  }
}
