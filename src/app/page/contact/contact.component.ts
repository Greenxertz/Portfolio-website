import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ContactService } from '../../service/contact.service'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  nameFormControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  messageFormControl = new FormControl('', Validators.required);

  constructor(private contactService: ContactService) {} // Inject the service

  onSubmit(event: Event) {
    event.preventDefault();
    if (
      this.nameFormControl.valid &&
      this.emailFormControl.valid &&
      this.messageFormControl.valid
    ) {
      // Use nullish coalescing operator to handle null values
      const name = this.nameFormControl.value ?? '';
      const email = this.emailFormControl.value ?? '';
      const message = this.messageFormControl.value ?? '';

      // Ensure that name, email, and message are non-null strings
      if (name && email && message) {
        this.contactService.sendMessage(name, email, message).subscribe(
          (response) => {
            console.log('Message sent successfully:', response);
            // Optionally, show a success message to the user
          },
          (error) => {
            console.error('Error sending message:', error);
            // Optionally, show an error message to the user
          }
        );
      } else {
        console.log('Form values are missing');
        // Optionally, show a validation message to the user
      }
    } else {
      console.log('Form is invalid');
      // Optionally, show a validation message to the user
    }
  }
}
