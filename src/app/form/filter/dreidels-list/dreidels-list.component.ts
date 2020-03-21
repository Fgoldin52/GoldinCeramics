import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dreidels-list',
  templateUrl: './dreidels-list.component.html',
  styleUrls: ['./dreidels-list.component.scss']
})
export class DreidelsListComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterDreidel();
  }

  filterDreidel() {
    this.firebaseService.filterDreidels()
      .subscribe(result => {
        this.items = result;
      });
  }

  viewDetails(item) {
    this.router.navigate(['form/work-detail/' + item.payload.doc.id]);
  }

}
