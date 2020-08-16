import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from './../../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.scss']
})
export class ViewWorkComponent implements OnInit {

  item: any;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      /* tslint:disable:no-string-literal */
      const data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
      }
    });
  }

  getShareURL() {
    return 'https://www.fygpractice.com';
  }





}
