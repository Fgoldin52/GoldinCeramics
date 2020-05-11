import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plates-list',
  templateUrl: './plates-list.component.html',
  styleUrls: ['./plates-list.component.scss']
})
export class PlatesListComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterPlate();
  }

  filterPlate() {
    this.firebaseService.filterPlates()
      .subscribe(result => {
        this.items = result;
      });
  }

}
