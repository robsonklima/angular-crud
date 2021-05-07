import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(post: Post): Observable<Post> {
    const url = `${this.baseUrl}/${post.id}`;
    return this.http.put<Post>(url, post).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;
    
    return this.http.delete<Post>(url).pipe(
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
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
