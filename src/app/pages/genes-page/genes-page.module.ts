import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesPageComponent } from './genes-page.component';
import { GenesPageRoutingModule } from './genes-page-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ListOfGenesComponent } from './components/list-of-genes/list-of-genes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditGenesModalComponent } from './modals/edit-genes-modal/edit-genes-modal.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    GenesPageComponent,
    ListOfGenesComponent,
    EditGenesModalComponent,
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    GenesPageRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class GenesPageModule {}
