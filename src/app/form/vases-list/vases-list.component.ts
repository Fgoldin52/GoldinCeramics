import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vases-list',
  templateUrl: './vases-list.component.html',
  styleUrls: ['./vases-list.component.scss']
})
export class VasesListComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterVase();
  }

  filterVase() {
    this.firebaseService.filterVases()
      .subscribe(result => {
        this.items = result;
      });
  }

  viewDetails(item) {
    this.router.navigate(['form/work-detail/' + item.payload.doc.id]);
  }

}
