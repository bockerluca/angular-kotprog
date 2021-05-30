import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SequencesService } from 'src/app/services/sequences/sequences.service';
import { SequencesModel } from 'src/app/shared/models/sequences';

@Component({
  selector: 'app-sequences-page',
  templateUrl: './sequences-page.component.html',
  styleUrls: ['./sequences-page.component.css'],
})
export class SequencesPageComponent implements OnInit {
  sequence: string = '';
  sequences: SequencesModel[];
  nucleotide: string;
  sequenceSubcription: Subscription;
  constructor(private sequencesService: SequencesService) {}

  ngOnInit(): void {
    this.loadData();
   this.generateRandomSequences();
  }

  loadData() {
    this.sequenceSubcription = this.sequencesService
      .getSequences()
      .subscribe((response) => {
        this.sequences = response.map((responseElement) => {
          let thisSequence = responseElement.payload.doc.data() as SequencesModel;
          thisSequence.documentReference = responseElement.payload.doc.id;
          console.log(thisSequence);;
          return thisSequence;
        });
      });
  }

  generateRandomNucleotide(){
    var rand = Math.floor(Math.random() * 4) + 1;
    switch (rand){
      case 1: {
        this.nucleotide = 'A';
        break;
      }
      case 2: {
        this.nucleotide = 'C';
        break;
      }
      case 3: {
        this.nucleotide = 'T';
        break;
      }
      case 4: {
        this.nucleotide = 'G';
        break;
      }
    }
  }

  generateRandomSequence(){
    for(var i = 0; i < 5; i++){
      for(var j = 0; j < 10; j++){
        this.generateRandomNucleotide();
        this.sequence += this.nucleotide;
      }
      this.sequence += '\n';
    }

  }
  generateRandomSequences(){
      for(var i = 0; i < 100; i++){
          this.generateRandomSequence();
      }
  }
}


