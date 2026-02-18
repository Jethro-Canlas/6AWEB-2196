import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrls: ['./reactive-demo.css'],
})
export class ReactiveDemo {
  roles = ['Admin', 'User', 'Guest'];
  genders = ['Male', 'Female', 'Other'];
  statuses = ['Permanent', 'Probationary'];
  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['Admin', Validators.required],
      gender: ['Male', Validators.required],
      status: ['Permanent', Validators.required],
      comments: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      console.log(this.form.value);
    }
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    const hasValue = control?.value != null && control?.value !== '';
    return !!control && control.invalid && (control.touched || control.dirty || this.submitted || hasValue);
  }
}
