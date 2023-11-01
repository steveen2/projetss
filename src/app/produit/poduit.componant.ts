import { Component,OnInit } from "@angular/core";
import { produitmockservice } from "./produit.mock.service";
import { produit } from "../shared/produit";
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
    selector: 'app-produit',
    templateUrl: './produit.componant.html',
    styleUrls: ['./produit.componant.css']
})

 //
export class produitcomponent implements OnInit{
     
    produits:produit[] | undefined;
    produitForm:FormGroup;
    constructor(private produitservice :produitmockservice,private fd:FormBuilder){
        this.produitForm= this.fd.group({
            ref:['',Validators.required],
            quantite:'',
            prixunitaire:''
        });
    }
ngOnInit(){
this.produits= this.produitservice.getproduit();
}
}