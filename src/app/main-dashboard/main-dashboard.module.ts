import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { RetailerDashboardComponent } from './retailer-dashboard/retailer-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { SponsorDashboardComponent } from './sponsor-dashboard/sponsor-dashboard.component';


@NgModule({
  declarations: [
    RetailerDashboardComponent,
    CustomerDashboardComponent,
    SponsorDashboardComponent
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule
  ]
})
export class MainDashboardModule { }
