import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from './../../firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

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
  downloadURL: Observable<string>;

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
    private storage: AngularFireStorage,
    private db: AngularFirestore
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
      height: [this.item.height, Validators.required],
      width: [this.item.width, Validators.required],
      depth: [this.item.depth, Validators.required],
      materials: [this.item.materials, Validators.required],
      price: [this.item.price, Validators.required],
      etsy: [this.item.etsy, Validators.required],
      type: [this.item.type, Validators.required],
      downloadURL: this.downloadURL
    });
  }

  onSubmit(value) {
    this.updateUser(this.item.id, value)
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

  onFileSelected(event) {
    const n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(async () => {
          this.downloadURL = await fileRef.getDownloadURL().toPromise();
          this.db.collection('images').add({ downloadURL: this.downloadURL });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  updateUser(userKey, value) {
    return this.db.collection('works').doc(userKey).set({
      title: value.title,
      description: value.description,
      height: value.height,
      width: value.width,
      depth: value.depth,
      materials: value.materials,
      price: +value.price,
      etsy: value.etsy,
      type: value.type,
      downloadURL: this.downloadURL
    });
  }


}
