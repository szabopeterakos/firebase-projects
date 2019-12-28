import {
  Component,
  ViewChild,
  Directive,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { element } from "protractor";
import { EventbusService } from "./eventbus.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements AfterViewInit {
  title = "swiper";
  @ViewChild("swiper", { static: false }) swiperRef;
  counter;
  hide = true;
  list = ["dashboard", "best", "rending", "5g"];
  constructor(private eventService: EventbusService) {
    console.time("a");
  }

  ngAfterViewInit(): void {
    console.timeEnd("a");
    const element = this.swiperRef.directiveRef.elementRef.nativeElement;
    setTimeout(() => {
      console.dir(element.swiper);
      console.dir(element.swiper.activeIndex);
    }, 0);
  }

  public onIndexChange(index: number): void {
    this.counter = index;
    console.log("Swiper index: ", index);
  }

  handleSelection(e) {
    const element = this.swiperRef.directiveRef.elementRef.nativeElement;
    console.log("selection:", e);
    switch (e) {
      case "next":
        element.swiper.slideNext();
        break;
      case "prev":
        element.swiper.slidePrev();
        break;
      default:
        element.swiper.slideTo(e);
        break;
    }
  }

  testClicker() {
    // this.swiperRef.directiveRef.setIndex(0);
    this.eventService.emit({ name: "notificaitonPage", state: true });
    console.log(
      "this is the current index: ",
      this.swiperRef.directiveRef.getIndex(0)
    );
  }
}
