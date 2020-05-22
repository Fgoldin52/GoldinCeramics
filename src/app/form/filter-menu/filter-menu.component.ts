import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseService } from './../../firebase.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {

  items: Array<any>;

  constructor(
    private db: AngularFirestore,
    private fs: FirebaseService
  ) { }

  ngOnInit() {
  }

  getDreidels() {
    this.filterDreidels().subscribe(result => { this.items = result; });
  }

  filterDreidels() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Dreidel')).snapshotChanges();
  }

  getPlates() {
    this.fs.filterPlates().subscribe(result => { this.items = result; });
  }


}
