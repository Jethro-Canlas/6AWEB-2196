import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private posts$?: Observable<Post[]>;
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  // expose errors so components can show an error state
  private errorSubject = new BehaviorSubject<string | null>(null);
  public readonly error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Returns an Observable<Post[]> and caches the network request using shareReplay(1).
   * Subsequent subscribers will receive the cached value and the API won't be re-fetched.
   */
  getPosts(): Observable<Post[]> {
    if (!this.posts$) {
      this.posts$ = this.http.get<Post[]>(this.API_URL).pipe(
        tap(() => {
          console.log('DataService: fetched posts');
          this.errorSubject.next(null);
        }),
        shareReplay(1),
        catchError((err) => {
          console.error('DataService.getPosts error', err);
          this.errorSubject.next(err?.message || 'Unknown error');
          return of([] as Post[]);
        })
      );
    }
    return this.posts$;
  }
}
