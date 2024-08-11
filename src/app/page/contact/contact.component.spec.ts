import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from './contact.component';
import { ContactService } from '../../service/contact.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactService: ContactService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
      ],
      declarations: [ContactComponent],
      providers: [ContactService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    contactService = TestBed.inject(ContactService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the form', () => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('invalid-email');
    component.contactForm.controls['subject'].setValue('');
    component.contactForm.controls['message'].setValue('');

    expect(component.contactForm.valid).toBeFalse();

    component.contactForm.controls['name'].setValue('John Doe');
    component.contactForm.controls['email'].setValue('john.doe@example.com');
    component.contactForm.controls['subject'].setValue('Test Subject');
    component.contactForm.controls['message'].setValue('Test Message');

    expect(component.contactForm.valid).toBeTrue();
  });

  it('should call sendMessage on form submit', () => {
    spyOn(contactService, 'sendMessage').and.callThrough();
    component.contactForm.controls['name'].setValue('John Doe');
    component.contactForm.controls['email'].setValue('john.doe@example.com');
    component.contactForm.controls['subject'].setValue('Test Subject');
    component.contactForm.controls['message'].setValue('Test Message');

    component.onSubmit();

    expect(contactService.sendMessage).toHaveBeenCalled();
  });
});
