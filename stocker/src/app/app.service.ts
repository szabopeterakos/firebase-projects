import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, catchError, tap, flatMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public message$: Observable<string> = this.message.asObservable();
  // public data$: Observable<any>;

  constructor(private http: HttpClient) {
    // this.getData();
  }

  // getData() {
  // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
  //   (res) => console.log(res),
  //   (err) => this.errorHandler(err)
  // );
  public data$ = this.http
    .get("https://jsonplaceholder.typicode.com/users")
    .pipe(
      // tap((data) => {
      //   console.log(
      //     "🚀 ~ file: app.service.ts ~ line 27 ~ AppService ~ tap ~ data",
      //     data
      //   );
      // }),
      map((users: any[]) => {
        return users.map((user) => user.name);
      }),
      tap((data) => {
        console.log(
          "🚀 ~ file: app.service.ts ~ line 27 ~ AppService ~ tap ~ data",
          data
        );
      }),
      catchError((error) => {
        return of(this.errorHandler(error));
      })
    );
  // }

  setMessage(newMessage) {
    this.message.next(newMessage);
  }

  private errorHandler(error) {
    this.message.next("Got an error");
  }
}
