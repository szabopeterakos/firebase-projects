import {
  Component,
  ViewChild,
  Directive,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { element } from "protractor";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements AfterViewInit {
  title = "swiper";
  @ViewChild("swiper", { static: false }) swiperRef;
  counter;
  isActive = this.counter;
  list = ["dashboard", "best", "rending", "5g"];
  constructor() {
    console.time("a");
  }

  ngAfterViewInit(): void {
    console.timeEnd("a");
    const element = this.swiperRef.directiveRef.elementRef.nativeElement;
    setTimeout(() => {
      element.swiper.slideNext(undefined, () => {
        const activeind = element.swiper.activeIndex;
        console.log("TCL: AppComponent -> activeind", activeind);
      });
      console.dir(element.swiper);
      console.dir(element.swiper.activeIndex);
    }, 0);
  }

  onIndexChange(e) {
    console.log("index change:", e);
    this.counter = e;
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
}
