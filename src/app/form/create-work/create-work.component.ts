import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../../firebase.service';

interface Type {
  value: string;
}

@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.scss']
})

export class CreateWorkComponent implements OnInit {

  exampleForm: FormGroup;

  types: Type[] = [
    { value: 'Vase' },
    { value: 'Mirror' },
    { value: 'Decorative Plate' },
    { value: 'Candle Stick' },
    { value: 'Mezuzah' },
    { value: 'Dreidel' },
    { value: 'Menorah' },
    { value: 'Jewelry Box' },
    { value: 'Cup' }
  ];

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      type: ['']
    });
  }

  resetFields() {
    this.exampleForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      type: new FormControl('')
    });
  }
  onSubmit(value) {
    this.firebaseService.createUser(value)
      .then(
        res => {
          this.resetFields();
          alert('The work has been successfully submitted');
        }
      );
  }


}
