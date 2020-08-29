import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FirebaseService } from './../../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { SeoService } from './../../seo.service';
import { CanonicalService } from '../../canonical.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private db: AngularFirestore,
    private seo: SeoService,
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) {
  }

  ngOnInit() {
    this.getData();
    this.titleService.setTitle('Purchase high-quality unique, handmade ceramic art');
    this.metaTagService.updateTag(
      { name: 'description', content: 'The perfect gift for birthdays, holidays and other special occasions' }
    );
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Ceramic Art, Ceramics, Birthday gifts, Holiday gifts' }
    ]);
    this.canonicalService.setCanonicalURL();
  }


  getData() {
    this.firebaseService.getUsers()
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

  getPlates() {
    this.filterPlates().subscribe(result => { this.items = result; });
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

  filterPlates() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Decorative Plate')).snapshotChanges();
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
