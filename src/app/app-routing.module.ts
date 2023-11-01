import { NgModule } from "@angular/core";
import { RouterModule, Router, Routes } from "@angular/router";
import { produitcomponent } from "./produit/poduit.componant";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const appRoutes : Routes = [ 
    {path:'produit',component:produitcomponent},
    {path:'dashboard' ,component:DashboardComponent}

];
@NgModule({
imports: [
    RouterModule.forRoot(
        appRoutes,
        {enableTracing:true}
    )
    
],
exports:[RouterModule]
})

export class AppRoutingModule{

}