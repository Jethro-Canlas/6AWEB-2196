import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  // Use a widely supported remote JPEG hero image
  heroImage = '/hero.jpg';

  // Card images (data-bound in template) - use images placed in public/
  cardImages = [
    '/france.avif',
    '/seoul.webp',
    '/sf.webp',
    '/boston.jpg',
  ];
}
