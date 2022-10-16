import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProdectsComponent implements OnInit, OnDestroy{
  productName = "A Book";
  isDisabled= true;
  products: string[] = [] ;
  private productsSubscription!: Subscription;

  constructor(private productsService: ProductsService){
    setTimeout(()=>{
      // this.productName="A tree";
      this.isDisabled= false;
     },3000);
  }
  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(()=>{
      this.products = this.productsService.getProducts();

    })
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

  onAddProduct(form: any){
    // this.products.push(this.productName);
    if(form.valid){
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);

    }
  }

  OnRemoveProduct(productName: string){
    this.products= this.products.filter(p=> p !== productName);
  }
}
