import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {OneComponent} from './dashboard/one/one.component';
import {TwoComponent} from './dashboard/two/two.component';
import {ThreeComponent} from './dashboard/three/three.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'one', component: OneComponent},
      {path: 'two', component: TwoComponent},
      {path: 'three', component: ThreeComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
