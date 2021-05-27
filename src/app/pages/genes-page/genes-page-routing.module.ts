import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenesPageComponent } from './genes-page.component';

const routes: Routes = [
  {
    path: '',
    component: GenesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenesPageRoutingModule {}
