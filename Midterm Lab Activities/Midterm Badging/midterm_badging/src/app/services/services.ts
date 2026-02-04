import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Post } from '../data-service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  posts$?: Observable<Post[]>;
  loading = true;
  error$?: Observable<string | null>;

  constructor(private data: DataService) {
    this.error$ = this.data.error$;

    const remote$ = this.data.getPosts().pipe(
      map((p) => p || []),
      startWith([] as Post[])
    );

    this.posts$ = combineLatest([remote$, this.search$]).pipe(
      map(([posts, search]) => {
        this.loading = false;
        if (!search) return posts;
        const q = search.toLowerCase();
        return posts.filter(
          (x) => x.title.toLowerCase().includes(q) || x.body.toLowerCase().includes(q)
        );
      })
    );
  }

  onSearch(value: string) {
    this.loading = true;
    this.searchSubject.next(value);
    // simulate minimal delay: loading will be set false when posts$ emits
  }
}
