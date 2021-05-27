import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesPageComponent } from './genes-page.component';
import { GenesPageRoutingModule } from './genes-page-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListOfGenesComponent } from './components/list-of-genes/list-of-genes.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditGenesModalComponent } from './modals/edit-genes-modal/edit-genes-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    GenesPageComponent,
    ListOfGenesComponent,
    EditGenesModalComponent,
  ],
  imports: [
    CommonModule,
    GenesPageRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ],
})
export class GenesPageModule {}
