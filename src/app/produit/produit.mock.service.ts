import { produit } from "../shared/produit";
import { Injectable } from "@angular/core";

@Injectable()
export class produitmockservice{
private PRODUITS:produit[]= [];
constructor(){
let p1: produit = new produit(1,"bord",10,4);
let p2: produit = new produit(2,"livre",50,20);
let p3: produit = new produit(3,"cahier",500,20.5);
let p4: produit = new produit(4,"stylo",20,20.8);
this.PRODUITS.push(p1);
this.PRODUITS.push(p2);
this.PRODUITS.push(p3);
this.PRODUITS.push(p4);
}
public getproduit(): produit[]{
return this.PRODUITS;
}
}