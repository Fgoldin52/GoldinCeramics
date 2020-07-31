import { Component, OnInit } from '@angular/core';
import { SendMailService } from './../send-mail-service.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  image =
    'https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg';
  name1;
  age;
  loading = false;
  buttionText = 'Submit';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  messageFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    public Email: SendMailService
  ) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.buttionText = 'Submitting...';
    const user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      message: this.messageFormControl.value
    };

    this.Email.sendEmail('http://localhost:3000/sendmail', user).subscribe(
      data => {
        const res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = 'Submit';
      }, () => {
        this.loading = false;
        this.buttionText = 'Submit';
      }
    );
  }

}
