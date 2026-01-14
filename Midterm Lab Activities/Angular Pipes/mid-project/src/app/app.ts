import { Component, signal } from '@angular/core';
import { PipesDemo } from './pipes-demo/pipes-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PipesDemo],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('mid-project');
}
