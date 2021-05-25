import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


const MaterialComponents = [
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  providers: [],
  imports: [...MaterialComponents],
  exports: [...MaterialComponents],
})
export class MaterialModule {}
