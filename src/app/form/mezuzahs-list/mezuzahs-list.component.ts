import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mezuzahs-list',
  templateUrl: './mezuzahs-list.component.html',
  styleUrls: ['./mezuzahs-list.component.scss']
})
export class MezuzahsListComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterMezuzah();
  }

  filterMezuzah() {
    this.firebaseService.filterMezuzahs()
      .subscribe(result => {
        this.items = result;
      });
  }

}
