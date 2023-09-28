import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { produitcomponent } from './produit/poduit.componant';
import { produitmockservice } from './produit/produit.mock.service';
//import { produit } from './share/produit'; 

@NgModule({
  declarations: [
    AppComponent,
    
    produitcomponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [produitmockservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
