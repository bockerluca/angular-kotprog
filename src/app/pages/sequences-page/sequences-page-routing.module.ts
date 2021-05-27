import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SequencesPageComponent } from './sequnces-page.component';

const routes: Routes = [
  {
    path: '',
    component: SequencesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SequencesPageRoutingModule {}
