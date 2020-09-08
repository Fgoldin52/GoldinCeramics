import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: Array<any>;

  item: any;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private db: AngularFirestore,
    private route: ActivatedRoute
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

  viewDetails(item) {
    this.router.navigate(['view-work/' + item.payload.doc.id]);
  }

  modifyItem(item) {
    this.router.navigate(['form/work-detail/' + item.payload.doc.id]);
  }

  view(item) {
    this.router.navigate(['view-work/' + item.payload.doc.id]);
  }

  openEtsy() {
    window.open(this.item.etsy);
  }

}
