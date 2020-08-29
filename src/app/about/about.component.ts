import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './../seo.service';
import { CanonicalService } from './../canonical.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private seo: SeoService,
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Gold\'n Ceramics');
    this.metaTagService.updateTag(
      { name: 'description', content: 'How Olga Goldin creates unique, handmade ceramic art pieces for her customers nationwide' }
    );
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Ceramic art, Artist, Bisque firing, Glaze firing' }
    ]);
    this.canonicalService.setCanonicalURL();
  }


}
