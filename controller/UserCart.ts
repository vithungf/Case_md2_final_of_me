import { product } from "../model/product";
import { ProductManager } from "./productManager";
import { AdminManager } from "./adminManager";

export class UserCart {
    id: string;
    name: string;
    quantity: number;
    totalPrice: number;
    itemList: product[] = [];

    constructor(id = '',
                name = '',
                quantity = 0,
                totalPrice = 0) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    showList() {
        return this.itemList;
    }

    addItem(newItem: product): void {
        this.itemList.push(newItem);
    }

    editCart(id: string, quantity: number): void {
        let index = this.findById(id);
        this.itemList[index].quantity = this.itemList[index].quantity - quantity;
    }

    findById(id: string): number {
        for (let i in this.itemList) {
            if (id == this.itemList[i].getId()) {
                return +i;
            }
        }
        return -1;
    }
     findUserById(id: string) :any {
        for (let i in AdminManager.UserList) {
            if (id == AdminManager.UserList[i].getId()) {
                return +i
            }
        }
        return -1
     
        
    }

    checkQuantity(id: string): number {
        let index = this.findById(id);
        let noExist = -1;
        if (index == noExist) {
            return -1;
        } else {
            return this.itemList[index].quantity;
        }
    }

    bill(): number {
        let total = 0;
        for (let i of this.itemList) {
            total += (i.price * i.quantity);
            ProductManager.soldList.push(i)
        }

        // this.findUserById(this.id).boughtCart.push(this.itemList);

        let clearCart: product[] = [];
        this.itemList = clearCart;
        let totalRounded = Math.round(total*100)/100;
        ProductManager.calculateRevenue(totalRounded);
        return totalRounded;
    }
    
    
}