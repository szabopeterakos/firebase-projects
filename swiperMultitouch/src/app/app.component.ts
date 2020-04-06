import {
  Component,
  ViewChild,
  Directive,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { element } from "protractor";
import { EventbusService } from "./eventbus.service";
import { SwiperConfigInterface } from "ngx-swiper-wrapper/dist/lib/swiper.interfaces";
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

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
  config: SwiperConfigInterface = {
    speed: 500,
    spaceBetween: 100,
    direction: "horizontal",
    touchRatio: 2,
    followFinger: true,
    threshold: 30,
    iOSEdgeSwipeThreshold: 30,
    roundLengths: true,
    effect: "slide",
    grabCursor: true
  };
  pEl;
  constructor(private eventService: EventbusService) {
    console.time("a");
  }

  ngAfterViewInit(): void {
    console.timeEnd("a");
    const element = this.swiperRef.directiveRef.elementRef.nativeElement;
    const buttonNavs = document.querySelectorAll("button");
    this.pEl = document.querySelector("p");
    const mouseMoves = fromEvent(this.pEl, "touchmove");
    const subscription = mouseMoves
      .pipe(debounceTime(10))
      .subscribe((evt: TouchEvent) => {
        // Log coords of mouse movements
        console.log(
          `Coords: ${evt.touches[0].clientX} X ${evt.touches.length}`
        );
      });

    const array = Array.from({ length: 6 }, (v, i) => {
      return buttonNavs[i];
    });
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
    this.eventService.emit({ name: "notificaitonPage", state: true });
    console.log(
      "this is the current index: ",
      this.swiperRef.directiveRef.getIndex(0)
    );
  }

  multiTouchHandler(event) {
    const touches = event.touches;
    const move = touches[0].clientX;
    console.log("TCL: multiTouchHandler -> touches", touches);
    console.log("TCL: multiTouchHandler -> move", move);
  }
}
