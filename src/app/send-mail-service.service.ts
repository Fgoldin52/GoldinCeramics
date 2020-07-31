import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient) { }

  // sendEmail(obj): Observable<EmailForm> {
  //  return this.http.post<EmailForm>('http://localhost:3000/mail', obj);
  // }

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, { }) {
    return this.http.post(url, { name: 'Feliks' });
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }
}
