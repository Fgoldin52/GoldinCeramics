import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {

  @Input() items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
  }

  modifyItem(item) {
    this.router.navigate(['form/work-detail/' + item.payload.doc.id]);
  }

  modifyImage(item) {
    this.router.navigate(['form/update-image/' + item.payload.doc.id]);
  }

  view(item) {
    this.router.navigate(['view-work/' + item.payload.doc.id]);
  }

}
