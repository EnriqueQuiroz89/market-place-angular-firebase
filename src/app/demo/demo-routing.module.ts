import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './components/demo.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
  },
];

//ngMdule Decorador tiene metadata
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
