import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css',
})
export class CustomForm {
  submitted = false;

  classes = ['Vagabond', 'Warrior', 'Hero', 'Astrologer', 'Prophet', 'Samurai', 'Prisoner', 'Confessor', 'Wretch', 'Bandit'];
  covenants = ['Tarnished', 'Knight of Marika', 'Servant of Rot', 'Bloodhound'];
  birthplaces = ['Limgrave', 'Caelid', 'Liurnia', 'Altus Plateau', 'Mountaintops of the Giants'];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tarnishedName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9 '-]+$/)]],
      runes: [null, [Validators.required, Validators.min(0), Validators.max(999999999)]],
      startingClass: ['', Validators.required],
      covenant: ['', Validators.required],
      birthplace: ['', Validators.required],
      oath: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      agreeToErdtree: [false, Validators.requiredTrue],
    });
  }

  isInvalid(name: string) {
    const c = this.form.get(name);
    return c && c.invalid && (c.dirty || c.touched || this.submitted);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Tarnished registered:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
