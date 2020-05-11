import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under500',
  templateUrl: './under500.component.html',
  styleUrls: ['./under500.component.scss']
})
export class Under500Component implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterUnder500();
  }

  filterUnder500() {
    this.firebaseService.filterUnder500()
      .subscribe(result => {
        this.items = result;
      });
  }
}
