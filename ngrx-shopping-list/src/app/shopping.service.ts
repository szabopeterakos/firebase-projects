import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { ShoppingItem } from "./store/models/shopping-item.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingService {
  private URL = "http://localhost:3000/shopping";
  constructor(private http: HttpClient) {}

  getShoppingItems() {
    return this.http.get<Array<ShoppingItem>>(this.URL).pipe(delay(3000));
  }
  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.URL, shoppingItem).pipe(delay(4000));
  }
  deleteShoppingItem(id: string) {
    return this.http.delete(`${this.URL}/${id}`).pipe(delay(5000));
  }
}
