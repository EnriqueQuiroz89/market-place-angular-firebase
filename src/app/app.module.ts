import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Esta daba error por que la tengo que poner en LaziLoading
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment} from '../environments/environment'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFirestore } from '@angular/fire/firestore';

//Lazi loading significa que ya no se agregan aqui

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, LayoutComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
