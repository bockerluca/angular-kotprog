import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genes-page',
  templateUrl: './genes-page.component.html',
  styleUrls: ['./genes-page.component.css'],
})
export class GenesPageComponent implements OnInit {
  selectedCategory: string;
  title: string = 'Spieces';

  constructor() {}

  ngOnInit(): void {}

  selectCategory(category: string){
    this.selectedCategory = category;
    switch (category){
      case 'genes': {
        this.title = 'Human';
        break;
      }
      case 'drosiGenes': {
        this.title = 'Drosophila Melanogaster';
        break;
      }
      case 'yeastGene': {
        this.title = 'Saccharomyces cerevisiae';
        break;
      }
      default: {
        this.title = 'Spieces';

      }
    }
  }

}
