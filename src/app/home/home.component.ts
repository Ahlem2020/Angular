import { Component, OnInit } from '@angular/core';
import { CalculeService } from '../calcule.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title :string ="E-Comerce"
  productList: Product[] 
  ngMax : number
  nb : number
  constructor( private calculeService: CalculeService) { }

  ngOnInit(): void {
    this.productList=[
    
    {id : 1,title:'p1',price:20,quantity: 20 , like : 0},
    {id : 2,title:'p2',price:10,quantity: 20 , like : 0},

    {id : 3,title:'p3',price:25,quantity: 20 , like : 0},

  
    ]  
}
IncrimentLike ( i : number ) {
this.productList[i].like++
}
ByProduct ( i : number ) {
  this.productList[i].quantity--
}
 getStat(){
   this.nb = 0;
   this.nb = this.calculeService.getStat( this.productList , 'quantity' , 0)
 }

}
