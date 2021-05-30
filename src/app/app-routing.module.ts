import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'genes-page',
    loadChildren: () =>
      import('./pages/genes-page/genes-page.module').then(
        (m) => m.GenesPageModule
      ),
  },
  {
    path: 'sequences-page',
    loadChildren: () =>
      import('./pages/sequences-page/sequences-page.module').then(
        (m) => m.SequencesPageModule
      ),
  },
  {
  path: 'author-page',
  loadChildren: () =>
    import('./pages/author-page/author-page.module').then(
      (m) => m.AuthorPageModule
    ),
},
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
