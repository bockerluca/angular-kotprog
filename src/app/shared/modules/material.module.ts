import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';




const MaterialComponents = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
  NgMatSearchBarModule
];

@NgModule({
  declarations: [],
  providers: [],
  imports: [...MaterialComponents],
  exports: [...MaterialComponents],
})
export class MaterialModule {}
