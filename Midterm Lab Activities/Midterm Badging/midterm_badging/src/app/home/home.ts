import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post } from '../data-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  posts$?: Observable<Post[]>;
  now = new Date();

  constructor(private data: DataService) {
    this.posts$ = this.data.getPosts().pipe(map((p) => p.slice(0, 5)));
  }

}
