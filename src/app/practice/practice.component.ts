import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  name: string[] = [
    'Feliks',
    'Ruby',
    'Vitaliy',
    'Olga',
    'Efim'
  ];

  shortNameFilter = this.name.filter(this.shortName);
  longNameFilter = this.name.filter(this.longName);

  // tslint:disable-next-line:no-inferrable-types
  showShortName: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  showLongName: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  shortName(element) {
    return (element.length < 5);
  }

  longName(a) {
    return (a.length > 5);
  }

}

