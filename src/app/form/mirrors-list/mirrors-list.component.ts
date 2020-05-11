import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mirrors-list',
  templateUrl: './mirrors-list.component.html',
  styleUrls: ['./mirrors-list.component.scss']
})
export class MirrorsListComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterMirror();
  }

  filterMirror() {
    this.firebaseService.filterMirrors()
      .subscribe(result => {
        this.items = result;
      });
  }
}
