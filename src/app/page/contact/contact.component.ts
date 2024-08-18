import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ContactService } from '../../service/contact.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private cdRef: ChangeDetectorRef
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, subject, message } = this.contactForm.value;

      try {
        const response = await this.contactService.sendMessage(
          name,
          email,
          message,
          subject
        );
        if (response.status === 200) {
          console.info('Message Sent Successfully');
          alert(
            `I've received you message, I will try to get back to you as soon as possible.`
          );
          this.resetForm();
        } else if (response.status === 500) {
          alert(`Seems like there was an issue. Try again later.`);
          this.resetForm();
          console.error('Server error occurred:', response);
        } else {
          console.log('Unhandled status code:', response.status);
          this.resetForm();
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  }

  private resetForm() {
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      control?.clearValidators(); 
      control?.setErrors(null);
      control?.markAsPristine();
      control?.markAsUntouched();
      control?.updateValueAndValidity();
    });
    this.cdRef.detectChanges();
  }
}
