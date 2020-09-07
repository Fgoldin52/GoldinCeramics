import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from './../../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { SeoService } from './../../seo.service';
import { CanonicalService } from '../../canonical.service';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.scss']
})
export class ViewWorkComponent implements OnInit {

  item: any;
  title = 'Test';

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      /* tslint:disable:no-string-literal */
      const data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
      }
    });
    this.seo.generateTags({
      title: `${this.item.title}`,
      description: `${this.item.description}`,
      image: `${this.item.downloadURL}`,
      slug: `view-work/${this.item.id}`
    });
    this.titleService.setTitle(`${this.item.title}`);
    this.metaTagService.updateTag(
      { name: 'description', content: `${this.item.description}` }
    );
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Vases, Mezuzahs, Dreidels, Candlesticks, Mirrors, Decor Plates' }
    ]);
    this.canonicalService.setCanonicalURL();
  }

  getShareURL() {
    return `https://goldinceramics.com/view-work/${this.item.id}`;
  }


}
