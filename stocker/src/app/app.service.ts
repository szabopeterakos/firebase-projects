import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public message$: Observable<string> = this.message.asObservable();
  // public data$: Observable<any>;
  headers: HttpHeaders = new HttpHeaders({
    "X-RapidAPI-Key": environment.KEY,
  });

  constructor(private http: HttpClient) {}

  // getData() {
  // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
  //   (res) => console.log(res),
  //   (err) => this.errorHandler(err)
  // );

  public data$ = this.http
    .get(
      "https://morning-star.p.rapidapi.com/stock/v2/get-realtime-data?performanceId=0P0000OQN8",
      { headers: this.headers }
    )
    .pipe(
      // map((users: any[]) => {
      //   return users.map((user) => user.name);
      // }),
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

  setMessage(newMessage) {
    this.message.next(newMessage);
  }

  private errorHandler(error) {
    this.message.next("Got an error");
  }
}
