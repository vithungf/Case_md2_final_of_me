import {IProduct} from "./interface/IProduct";

export class product implements IProduct{
    id: string;
    name: string;
    price: number;
    quantity: number;

    constructor(id: string, name: string, price: number, quantity: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getId():string {
        return this.id;
    }
    getName():string {
        return this.name;
    }
    getPrice():number {
        return this.price;
    }
    getQuantity():number {
        return this.quantity;
    }

    setId(id:string):void {
        this.id = id;
    }

    setName(name:string):void {
        this.name = name;
    }
    setPrice(price:number):void {
        this.price = price;
    }
    setQuantity(quantity:number):void {
        this.quantity = quantity;
    }
}