import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

interface EventData {
  name: string;
  state: boolean;
}

@Injectable({
  providedIn: "root"
})
export class EventbusService {
  private subject$ = new Subject();

  constructor() {}

  emit(event: EventData) {
    this.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: EventData) => e.name === eventName),
        map((e: EventData) => e.state)
      )
      .subscribe(action);
  }
}
