import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { RankComponent } from './rank/rank.component';
const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  // { path: '*', redirectTo: HomePageComponent, pathMatch: 'full' },
  { path: 'rank/:id', component: RankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
