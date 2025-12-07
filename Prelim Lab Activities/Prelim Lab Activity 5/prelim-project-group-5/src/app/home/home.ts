import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroImage = '/hero-img.jpg';

  shroudImage = '/shroud.webp';
  mechaImage = '/mecha-quitter.webp';
  phenomamanImage = '/Phenomaman.jpg';

  dispatchImage = '/dispatching.webp';
  heroActionImage = '/action.webp';
  investigationImage = '/investigation.webp';
  constructor(private router: Router) {}

  navigateToError() {
    this.router.navigate(['/404']);
  }
}
