import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorPageComponent } from './author-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorPageRoutingModule {}
