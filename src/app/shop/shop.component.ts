import { Component, OnInit } from "@angular/core";
import { Category } from "../model/category.model";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

import { ChangeDetectorRef } from '@angular/core'; 


@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
})
export class ShopComponent implements OnInit{
    public selectedCategory: Category | null  = null;
    public productsPerPage = 2;
    public selectedPage = 1 ;
    public selectedProduct: Product[] = [];

    constructor(
        private productRepository: ProductRepository,
        private cdr: ChangeDetectorRef          //ExpressionChangedAfterItHasBeenCheckedError
        ){}

        ngAfterContentChecked() {               //ExpressionChangedAfterItHasBeenCheckedError
            this.cdr.detectChanges();
            this.products;
        }

    ngOnInit(){
        
    }
    
    get products(): Product[]{
        let index = (this.selectedPage-1) * this.productsPerPage;

        this.selectedProduct = this.productRepository.
        getProducts(this.selectedCategory);

        return this.selectedProduct
            .slice(index,index+this.productsPerPage);
    }
    get pageNumbers(): number []{
        return Array(
        Math.ceil(this.productRepository
            .getProducts(this.selectedCategory).length/this.productsPerPage))
            .fill(0)
            .map((a,i) => i+1);
    }

    changePage(p:number){
        this.selectedPage = p;
    }

    changePageSize(size: number){
        this.productsPerPage = size;
        this.changePage(1);
    }

    getCategory(category: Category){
        this.selectedCategory = category;
    }

}
