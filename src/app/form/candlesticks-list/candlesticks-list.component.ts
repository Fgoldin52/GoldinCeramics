import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candlesticks-list',
  templateUrl: './candlesticks-list.component.html',
  styleUrls: ['./candlesticks-list.component.scss']
})
export class CandlesticksListComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterCandlestick();
  }

  filterCandlestick() {
    this.firebaseService.filterCandleSticks()
      .subscribe(result => {
        this.items = result;
      });
  }

}
