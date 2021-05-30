import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenesModel } from 'src/app/shared/models/genes';
import { GenesService } from 'src/app/services/genes/genes.service';

@Component({
  selector: 'app-edit-genes-modal',
  templateUrl: './edit-genes-modal.component.html',
  styleUrls: ['./edit-genes-modal.component.css'],
})
export class EditGenesModalComponent implements OnInit {
  geneForm: FormGroup = this._fb.group({
    shortName: [this.data.geneToEdit?.shortName || '', [Validators.required]],
    fullName: [this.data.geneToEdit?.fullName || '', [Validators.required]],
  });
  selectedCategory: string;

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<EditGenesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { geneToEdit: GenesModel, category: string },
    private genesService: GenesService
  ) {
    this.selectedCategory = data.category;
  }

  ngOnInit(): void {}
  onSubmit(): void {
    if (this.geneForm.valid) {
      const genesFromFormGroup: GenesModel = this.geneForm.value;
      if (this.data.geneToEdit) {
        genesFromFormGroup.documentReference =
          this.data.geneToEdit.documentReference;
        this.genesService
          .updateGene(this.selectedCategory, genesFromFormGroup)
          .then((resolve) => this.dialogRef.close());
      } else {
        this.genesService
          .createGene(this.selectedCategory, genesFromFormGroup)
          .then((resolve) => this.dialogRef.close());
      }
    }
  }
}
