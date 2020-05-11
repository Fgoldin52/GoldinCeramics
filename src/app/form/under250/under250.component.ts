import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under250',
  templateUrl: './under250.component.html',
  styleUrls: ['./under250.component.scss']
})
export class Under250Component implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterUnder250();
  }

  filterUnder250() {
    this.firebaseService.filterUnder250()
      .subscribe(result => {
        this.items = result;
      });
  }

}
