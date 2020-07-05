import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
  }

  viewDetails(item) {
    this.router.navigate(['view-work/' + item.payload.doc.id]);
  }

  view(item) {
    this.router.navigate(['view-work/' + item.payload.doc.id]);
  }

}
