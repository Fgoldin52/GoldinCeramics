import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../../firebase.service';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from 'angularfire2/firestore';

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

  title = 'cloudsSorage';
  selectedFile: File = null;
  ab;
  downloadURL: Observable<string>;

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      type: [''],
      url: ['']
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
    this.createWork(value)
      .then(
        res => {
          this.resetFields();
          alert('The work has been successfully submitted');
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

  createWork(value) {
    return this.db.collection('works').add({
      title: value.title,
      description: value.description,
      price: value.price,
      type: value.type,
      downloadURL: this.downloadURL
    });
  }


}
