import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailForm } from './interface/email.model';

@Injectable({
  providedIn: 'root'
})
export class SendMailServiceService {

  constructor(private http: HttpClient) { }

  sendEmail(obj): Observable<EmailForm> {
    return this.http.post<EmailForm>('http://localhost:3000/mail', obj);
  }
}
