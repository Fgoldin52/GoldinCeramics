import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-modify-list',
  templateUrl: './modify-list.component.html',
  styleUrls: ['./modify-list.component.scss']
})
export class ModifyListComponent implements OnInit {

  @Input() items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getPurchaseWorks()
      .subscribe(result => {
        this.items = result;
      });
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

  getUnder100() {
    this.filterUnder100().subscribe(result => { this.items = result; });
  }

  getUnder250() {
    this.filterUnder250().subscribe(result => { this.items = result; });
  }

  getUnder500() {
    this.filterUnder500().subscribe(result => { this.items = result; });
  }

  getOver500() {
    this.filterOver500().subscribe(result => { this.items = result; });
  }

  filterDreidels() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Dreidel')).snapshotChanges();
  }

  filterCandleSticks() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Candle Stick')).snapshotChanges();
  }

  filterDishes() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Dish')).snapshotChanges();
  }

  filterVases() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Vase')).snapshotChanges();
  }

  filterMezuzahs() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Mezuzah')).snapshotChanges();
  }

  filterMirrors() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Mirror')).snapshotChanges();
  }

  filterMenorahs() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Menorah')).snapshotChanges();
  }

  filterJewelry() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Jewelry')).snapshotChanges();
  }

  filterCups() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Cup')).snapshotChanges();
  }

  filterUnder100() {
    return this.db.collection('works', ref => ref.where('price', '<', 100)).snapshotChanges();
  }

  filterUnder250() {
    return this.db.collection('works', ref => ref.where('price', '>=', 100).where('price', '<', 250)).snapshotChanges();
  }

  filterUnder500() {
    return this.db.collection('works', ref => ref.where('price', '>=', 250).where('price', '<', 500)).snapshotChanges();
  }

  filterOver500() {
    return this.db.collection('works', ref => ref.where('price', '>=', 500)).snapshotChanges();
  }

}
