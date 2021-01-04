import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
//PAra usar Stepper import MaterialModule
import { MaterialModule } from '../material/material.module';
//Shared module para el header y footer y demas
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrderRoutingModule, MaterialModule, SharedModule],
})
export class OrderModule {}
