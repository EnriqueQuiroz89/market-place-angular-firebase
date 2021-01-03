import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {    // A create se accede desde root de admin
        path: 'create',
        component: ProductFormComponent,
      },
      {    // A create se accede desde root de admin
        path: 'table',
        component: DashboardComponent,
      },
      {    // A create se accede desde root de admin
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
