import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { produitcomponent } from './produit/poduit.componant';
import { produitmockservice } from './produit/produit.mock.service';
import {Navbarcomponent} from './navbar/navbar.component';
import {Sidebarcomponent} from './sidebar/sidebar.component';
import {Contentcomponent} from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//import { produit } from './share/produit'; 


@NgModule({
  declarations: [
    AppComponent,
    
    produitcomponent,
    Navbarcomponent,
    Sidebarcomponent,
    Contentcomponent,
    DashboardComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [produitmockservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
