import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  state = new BehaviorSubject<string[]>(null);
  state$ = this.state.asObservable();
  store = [
    "1",
    "2",
    "99",
    "99",
    "99",
    "99",
    "99",
    "99",
    "99",
    "99",
  ];

  constructor() {
    this.state.next(this.store);
  }

  loadMore() {
    console.log(
      "🚀 ~ file: data.service.ts ~ line 14 ~ DataService ~ loadMore ~ loadMore"
    );
    const next = ["1", "2", "3", "4", "5"];
    const newstore = [...this.store, ...next];
    this.store = newstore;
    this.state.next(this.store);
  }
}
