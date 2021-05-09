import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { RetailerDashboardComponent } from './retailer-dashboard/retailer-dashboard.component';
import { SponsorDashboardComponent } from './sponsor-dashboard/sponsor-dashboard.component';

const routes: Routes = [
  {path:'retail-dashboard' ,component :RetailerDashboardComponent},
  {path:'customer-dashboard' ,component :CustomerDashboardComponent},
  {path:'sponsor-dashboard' ,component :SponsorDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
