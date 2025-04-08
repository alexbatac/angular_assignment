import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup;
  showConfirmation = false;

  programs = [
    'Youth Camp',
    'Family Camp',
    'Leaders Camp',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9\-\+]{9,15}$/)]],
      group: this.fb.group({
        under12: [0, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+$')]],
        teens: [0, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+$')]],
        adults: [0, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+$')]],
      }),
      
      program: ['', Validators.required],
      remarks: ['']
    });
  }

  confirmSubmit() {  // ✅ Match HTML (confirmSubmit)
    if (this.form.valid) {
      this.showConfirmation = true;
    } else {
      this.form.markAllAsTouched();
    }
  }

  editForm() { // ✅ Used for "Back" button
    this.showConfirmation = false;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      alert('Registration successful!');
      this.form.reset();
      this.showConfirmation = false;
    }
  }
}