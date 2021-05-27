import { Component, Input, OnInit } from '@angular/core';
import { GenesModel } from 'src/app/shared/models/genes';
import { GenesService } from '../../../../services/genes/genes.service';
import { EditGenesModalComponent } from '../../modals/edit-genes-modal/edit-genes-modal.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-list-of-genes',
  templateUrl: './list-of-genes.component.html',
  styleUrls: ['./list-of-genes.component.css'],
})
export class ListOfGenesComponent implements OnInit {
  @Input() selectedCategory: string;
  genes: GenesModel[];

  constructor(private _genesService: GenesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.selectedCategory);
    this.loadData();
  }
  loadData() {
    this._genesService.getGenes().subscribe((response) => {
      this.genes = response.map((responseElement) => {
        let gene = responseElement.payload.doc.data() as GenesModel;
        gene.documentReference = responseElement.payload.doc.id;
        return gene;
      });
    });
  }
  openEditGenesModal(gene?: GenesModel): void {
    const dialogRef = this.dialog.open(EditGenesModalComponent, {
      width: '600px',
      data: {
        geneToEdit: gene,
      },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }
  deleteThisGene(gene: GenesModel): void {
    this._genesService.deleteGene(gene).then((resolve) => (gene = null));;
  }
}