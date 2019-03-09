import { HomeTableComponent } from './home-table/home-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  {path: '', component : LoginComponent},
  { path: 'home', component : HomeTableComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'record' , component: DetailsComponentComponent},  
  {path: 'main_nav' , component: MainNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
