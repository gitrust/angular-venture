import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//	{ path: '', redirectTo: '/mission-search', pathMatch: 'full' },
//	{ path: 'mission-search', component: MissionSearchComponent },
//	{ path: 'missions', component: MissionSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
