import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://greenxertz.co.za/send_email.php'; 

  constructor(private http: HttpClient) {}

  sendMessage(name: string, email: string, message: string): Observable<any> {
    const body = new URLSearchParams({
      name,
      email,
      message,
      to_email: 'marcotexiera308@gmail.com',
      subject: `Message from ${name}`,
    }).toString();

    return this.http.post(this.apiUrl, body, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }
}