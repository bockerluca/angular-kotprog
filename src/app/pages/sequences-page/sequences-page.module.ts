import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequencesPageComponent } from './sequnces-page.component';
import { SequencesPageRoutingModule } from './sequences-page-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SequencesPageComponent],
  imports: [CommonModule, SequencesPageRoutingModule, MaterialModule, MatIconModule],
})
export class SequencesPageModule {}
