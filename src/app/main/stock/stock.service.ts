import { Stock } from './stock.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError, timeout } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class StockService {
  baseUrl = "https://bovespa-api.herokuapp.com/stocks";
  //baseUrl = 'http://127.0.0.1:5000/stocks'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  create(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.baseUrl, stock).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl).pipe(
      timeout(30000),
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByIName(name: string): Observable<Stock> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.get<Stock>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(name: string): Observable<Stock> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.delete<Stock>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
