import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  model = { name: '', email: '', message: '' };

  onSubmit() {
    // no backend; just keep the preview updated
    console.log('contact submit', this.model);
  }
}
