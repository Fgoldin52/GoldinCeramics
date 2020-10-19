import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from './../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items: Array<any>;
  galleryForm: FormGroup;

  constructor(
    private Form: FormBuilder,
    private db: AngularFirestore,
    public firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    this.getData();
    this.createForm();
  }

  getData() {
    this.firebaseService.getGalleryWorks()
      .subscribe(result => {
        this.items = result;
      });
  }

  createForm() {
    this.galleryForm = this.Form.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      artPieceName: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  resetFields() {
    this.galleryForm = this.Form.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      artPieceName: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  createWork(value) {
    return this.db.collection('customOrder').add({
      name: value.name,
      email: value.email,
      phone: value.phone,
      artPieceName: value.artPieceName,
      message: value.message,
    });
  }

  onSubmit(value) {
    this.createWork(value)
      .then(
        res => {
          this.resetFields();
        }
      );
  }

  getDreidels() {
    this.filterDreidels().subscribe(result => { this.items = result; });
  }

  getCandleSticks() {
    this.filterCandleSticks().subscribe(result => { this.items = result; });
  }

  getDishes() {
    this.filterDishes().subscribe(result => { this.items = result; });
  }

  getVases() {
    this.filterVases().subscribe(result => { this.items = result; });
  }

  getMezuzahs() {
    this.filterMezuzahs().subscribe(result => { this.items = result; });
  }

  getMirrors() {
    this.filterMirrors().subscribe(result => { this.items = result; });
  }

  getMenorahs() {
    this.filterMenorahs().subscribe(result => { this.items = result; });
  }

  getJewelry() {
    this.filterJewelry().subscribe(result => { this.items = result; });
  }

  getCups() {
    this.filterCups().subscribe(result => { this.items = result; });
  }

  filterDreidels() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Dreidel')).snapshotChanges();
  }

  filterCandleSticks() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Candle Stick')).snapshotChanges();
  }

  filterDishes() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Dish')).snapshotChanges();
  }

  filterVases() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Vase')).snapshotChanges();
  }

  filterMezuzahs() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Mezuzah')).snapshotChanges();
  }

  filterMirrors() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Mirror')).snapshotChanges();
  }

  filterMenorahs() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Menorah')).snapshotChanges();
  }

  filterJewelry() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Jewelry')).snapshotChanges();
  }

  filterCups() {
    return this.db.collection('gallery', ref => ref.where('type', '==', 'Cup')).snapshotChanges();
  }

}
