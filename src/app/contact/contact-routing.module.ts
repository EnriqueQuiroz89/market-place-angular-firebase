import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

//ngMdule Decorador tiene metadata
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
