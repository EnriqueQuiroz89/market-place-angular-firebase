import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
// Quiero proteger la ruta de contacts con un Guardian
import { AdminGuard } from './core/guardians/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then((m) => m.OrderModule),
      },
    ],
  },
  {
    path: 'demo',
    //loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'admin', //admin va a cargar en modo Lazing
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth', //admin va a cargar en modo Lazing
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  
    {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // { preloadingStrategy: PreloadAllModules,}
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
