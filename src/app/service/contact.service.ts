import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://greenxertz.co.za/send_email.php';

  constructor(private http: HttpClient) {}
  
  async sendMessage(
    name: string,
    email: string,
    message: string,
    subject: string
  ): Promise<HttpResponse<any>> {
    const body = new URLSearchParams({
      name,
      email,
      message,
      subject,
      to_email: 'marcoteixeira308@gmail.com',
    }).toString();
  
    return await firstValueFrom(
      this.http.post(this.apiUrl, body, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        observe: 'response',
        responseType: 'text',
      })
    );
  }
}
