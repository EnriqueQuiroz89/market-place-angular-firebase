import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ¿Por que van en Declaraciones??
import { ContactComponent } from './components/contact.component';
// POr que van en Importaciones?
import { SharedModule } from './../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SharedModule, ContactRoutingModule],
})
export class ContactModule {}
