import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ¿Por que van en Declaraciones??
import { DemoComponent } from './components/demo.component';
// POr que van en Importaciones?
import { SharedModule } from './../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    FormsModule
  ]
})
class DemoModule { }
