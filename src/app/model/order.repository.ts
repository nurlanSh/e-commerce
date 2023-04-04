import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { RestService } from "./rest.service";

@Injectable()
export class OrderRepository{
    private orders: Order[] = [];

    constructor(private restService: RestService){}

    getOrders(): Order[]{
        return this.orders;
    }
    
    saveOrders(order: Order){
        return this.restService.saveOrder(order);
    }
}