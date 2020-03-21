import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

interface Type {
  value: string;
}

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {
  exampleForm: FormGroup;
  item: any;

  types: Type[] = [
    { value: 'Vase' },
    { value: 'Mirror' },
    { value: 'Decorative Plate' },
    { value: 'Candle Stick' },
    { value: 'Mezuzah' },
    { value: 'Dreidel' },
  ];

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      /* tslint:disable:no-string-literal */
      const data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    });
  }

  createForm() {
    this.exampleForm = this.fb.group({
      title: [this.item.title, Validators.required],
      description: [this.item.description, Validators.required],
      price: [this.item.price, Validators.required],
      type: [this.item.type, Validators.required]
    });
  }

  onSubmit(value) {
    this.firebaseService.updateUser(this.item.id, value)
      .then(
        res => {
          this.router.navigate(['form/work-list']);
        });
  }

  delete() {
    this.firebaseService.deleteUser(this.item.id)
      .then(
        res => {
          this.router.navigate(['form/work-list']);
        },
        err => {
          console.log(err);
        }
      );
  }

}
