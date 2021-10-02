import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

export interface WeightRecord {
  weight: Number;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  BaseUrl = 'https://secret-tundra-40269.herokuapp.com/records';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private handleError(error: HttpErrorResponse) {
    console.log("🚀 ~ file: database.service.ts ~ line 26 ~ DatabaseService ~ handleError ~ error", error)
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      console.log(error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<WeightRecord[]>(this.BaseUrl);
  }

  setRecord(record: WeightRecord): Observable<WeightRecord> {
    return this.http
      .post<WeightRecord>(this.BaseUrl, record, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
