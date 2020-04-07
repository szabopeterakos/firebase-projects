import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";

import {
  LoadShoppingAction,
  ShoppingActionTypes,
  LoadShoppingSuccessAction,
  LoadShoppingFailureAction,
  AddItemAction,
  AddItemSuccessAction,
  AddItemFailureAction,
  DeleteItemAction,
  DeleteItemSuccessAction,
  DeleteItemFailureAction,
} from "../actions/shopping.actions";
import { of } from "rxjs";
import { ShoppingService } from "src/app/shopping.service";

@Injectable()
export class ShoppingEffects {
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}

  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(() =>
      this.shoppingService.getShoppingItems().pipe(
        map((data) => {
          return new LoadShoppingSuccessAction(data);
        }),
        catchError((err) => of(new LoadShoppingFailureAction(err)))
      )
    )
  );

  @Effect() addShopping$ = this.actions$.pipe(
    ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap((data) =>
      this.shoppingService.addShoppingItem(data.payload).pipe(
        map(() => {
          return new AddItemSuccessAction(data.payload);
        }),
        catchError((err) => of(new AddItemFailureAction(err)))
      )
    )
  );

  @Effect() deleteShopping$ = this.actions$.pipe(
    ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
    mergeMap((id) =>
      this.shoppingService.deleteShoppingItem(id.payload).pipe(
        map(() => {
          return new DeleteItemSuccessAction(id.payload);
        }),
        catchError((err) => of(new DeleteItemFailureAction(err)))
      )
    )
  );
}
