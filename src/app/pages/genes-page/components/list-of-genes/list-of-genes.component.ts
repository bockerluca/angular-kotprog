import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GenesModel } from 'src/app/shared/models/genes';
import { GenesService } from '../../../../services/genes/genes.service';
import { EditGenesModalComponent } from '../../modals/edit-genes-modal/edit-genes-modal.component';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';
import { GenesPageComponent } from '../../genes-page.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-of-genes',
  templateUrl: './list-of-genes.component.html',
  styleUrls: ['./list-of-genes.component.css'],
})
export class ListOfGenesComponent implements AfterViewInit, OnDestroy {
  @Input() selectedCategory: string;
  genes: GenesModel[];
  geneSubscription: Subscription;

  constructor(
    private _genesService: GenesService,
    public dialog: MatDialog,
    public genePageComponent: GenesPageComponent
  ) {}

  ngAfterViewInit(): void {
    this.loadData();
  }
  ngOnDestroy(): void {
    this.geneSubscription.unsubscribe();
  }

  loadData() {
    this.geneSubscription = this._genesService
      .getGenes(this.selectedCategory)
      .subscribe((response) => {
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
        category: this.selectedCategory
      },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }
  deleteThisGene(gene: GenesModel): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '600px',
      data: {
        message: 'Biztosan törli?',
      },
    });
    dialogRef.afterClosed().subscribe((deleteGene) => {
      if (deleteGene) {
        this._genesService.deleteGene(this.selectedCategory, gene).then((resolve) => (gene = null));
      }
    });
  }
}
