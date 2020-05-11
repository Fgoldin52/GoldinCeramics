import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under100',
  templateUrl: './under100.component.html',
  styleUrls: ['./under100.component.scss']
})
export class Under100Component implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterUnder100();
  }

  filterUnder100() {
    this.firebaseService.filterUnder100()
      .subscribe(result => {
        this.items = result;
      });
  }

}
