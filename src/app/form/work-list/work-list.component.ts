import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.firebaseService.getUsers()
      .subscribe(result => {
        this.items = result;
      });
  }

}
