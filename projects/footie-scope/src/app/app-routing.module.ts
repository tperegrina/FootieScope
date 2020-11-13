import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'classic-league' },
  { path: 'classic-league/:leagueId', loadChildren: () => import('./pages/classic-league/classic-league.module').then(m => m.ClassicLeagueModule) },
  { path: '**', redirectTo: 'classic-league' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
