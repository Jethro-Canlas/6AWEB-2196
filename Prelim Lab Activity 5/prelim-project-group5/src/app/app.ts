import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('prelim-project-group5');
  // Keep a local image path — if this doesn't load in your environment,
  // consider moving the image to `public/` or using `new URL(..., import.meta.url)`.
  imageUrl = './SDN_Logo_color.webp';

  // Simple menu toggle for mobile
  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
}
