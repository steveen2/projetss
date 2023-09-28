import { Component,OnInit } from "@angular/core";
import { produitmockservice } from "./produit.mock.service";
import { produit } from "../shared/produit";
@Component({
    selector: 'app-produit',
    templateUrl: './produit.componant.html',
    styleUrls: ['./produit.componant.css']
})

 //
export class produitcomponent implements OnInit{
     produits:produit[] | undefined;
    constructor(private produitservice :produitmockservice){

    }
ngOnInit(){
this.produits= this.produitservice.getproduit();
}
}