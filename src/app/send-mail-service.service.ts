import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailServiceService {

  constructor(private http: HttpClient) { }

  // sendEmail(obj): Observable<EmailForm> {
  //  return this.http.post<EmailForm>('http://localhost:3000/mail', obj);
  // }

  sendEmail(subject, email, text) {
    const uri = 'http://localhost:3000/mail';
    const obj = {
      subject,
      email,
      text
    };
    return this.http.post(uri, obj);
  }
}
