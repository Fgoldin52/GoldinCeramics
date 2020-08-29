import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SendMailService } from './../send-mail-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

import { SeoService } from './../seo.service';
import { CanonicalService } from '../canonical.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  messageFormControl = new FormControl('', [
    Validators.required
  ]);

  user = {
    name: this.nameFormControl.value,
    email: this.emailFormControl.value,
    message: this.messageFormControl.value
  };

  constructor(
    public Email: SendMailService,
    public formBuilder: FormBuilder,
    private db: AngularFirestore,
    private metaTagService: Meta,
    private canonicalService: CanonicalService,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.createForm();
    this.titleService.setTitle('Contact Us');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Contact us with any custom ceramic art orders, questions and more' }
    );
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Ceramic art, Custom orders, Questions' }
    ]);
    this.canonicalService.setCanonicalURL();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  resetFields() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.createContact(value)
      .then(
        res => {
          this.resetFields();
          alert('The work has been successfully submitted');
        }
      );
  }

  createContact(value) {
    return this.db.collection('email').add({
      name: value.name,
      email: value.email,
      message: value.message
    });
  }

}
