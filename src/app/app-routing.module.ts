import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'main-dashboard', loadChildren: () => import('./main-dashboard/main-dashboard.module').then(m => m.MainDashboardModule)},
  { path: '',redirectTo:'/dashboard',pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    }
  ),
    CommonModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { 
 
}
