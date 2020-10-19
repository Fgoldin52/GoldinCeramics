import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

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

}
