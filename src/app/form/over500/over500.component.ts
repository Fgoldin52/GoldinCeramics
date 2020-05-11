import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-over500',
  templateUrl: './over500.component.html',
  styleUrls: ['./over500.component.scss']
})
export class Over500Component implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterOver500();
  }

  filterOver500() {
    this.firebaseService.filterOver500()
      .subscribe(result => {
        this.items = result;
      });
  }

}
