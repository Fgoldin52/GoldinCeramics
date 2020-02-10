import { Component, OnInit, OnDestroy } from '@angular/core';
import { SendMailServiceService } from './../send-mail-service.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-send-email',
    templateUrl: './send-email.component.html',
    styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {
    public subscription: Subscription;
    constructor(private sendmailservice: SendMailServiceService,
        // tslint:disable-next-line:align
        private fb: FormBuilder) { }

    infoForm = this.fb.group({
        subject: ['', [
            Validators.required,
            Validators.minLength(3)
        ]
        ],
        email: ['', [
            Validators.required,
            Validators.email
        ]
        ],
        text: ['', [
            Validators.required,
            Validators.email
        ]
        ]
    });

    // get subject() { return this.infoForm.get('subject'); }
    // get email() { return this.infoForm.get('email'); }
    // get text() { return this.infoForm.get('text'); }


    /* sendMail() {
        console.log(this.infoForm.value);
        this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
            subscribe(data => {
                // tslint:disable-next-line:no-string-literal
                const msg = data['message'];
                alert(msg);
                // console.log(data, "success");
            }, error => {
                // tslint:disable-next-line:quotemark
                console.error(error, "error");
            });
    } */

    sendMail(subject, email, text) {
        this.sendmailservice.sendEmail(subject, email, text).subscribe(success => {
            console.log('Success!');
        }, error => {
            console.log('Error!');
        });
    }
}
