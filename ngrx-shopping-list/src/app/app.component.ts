import { Component } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ShoppingItem } from "./store/models/shopping-item.model";
import { AppState } from "./store/models/app-state.model";
import { Store } from "@ngrx/store";

import { v4 as uuid } from "uuid";
import {
  AddItemAction,
  RemoveItemAction,
} from "./store/actions/shopping.actions";
import {
  IncreaseCounterAction,
  DecreaseCounterAction,
} from "./store/actions/counter.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ngrx-shopping-list";

  shoppingItems: Observable<Array<ShoppingItem>>;
  counter: Observable<number>;
  newShoppingItem: ShoppingItem = { id: "", name: "" };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingItems = this.store.select((store) => store.shopping);
    this.counter = this.store.select((store) => store.counter);
  }

  addItem() {
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: "", name: "" };
  }

  deleteItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }

  inc() {
    this.store.dispatch(new IncreaseCounterAction("INC"));
  }

  dec() {
    this.store.dispatch(new DecreaseCounterAction("DEC"));
  }
}
