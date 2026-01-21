import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];

  constructor(private httpclient: Httpclient) {}

  ngOnInit() {
    this.httpclient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });
  }

  trackById(index: number, item: User) {
    return item.id;
  }
}
