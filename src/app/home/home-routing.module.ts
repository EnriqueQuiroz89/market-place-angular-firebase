import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{
    path: '',
    component: HomeComponent
}];

//ngMdule Decorador tiene metadata
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
