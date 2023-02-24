import {product} from "../model/product";

export class ProductManager {
static listProducts: product[] = [];

    static soldList: product[] = [];
    static revenue = 0;

    constructor(){
        ProductManager.listProducts.push(new product('s001', 'hoa tươi', 1000, 100))
        ProductManager.listProducts.push(new product('s002', 'thịt', 500, 100))
        ProductManager.listProducts.push(new product('s003', 'cam', 10, 200))
        ProductManager.listProducts.push(new product('s004', 'táo', 2000, 50))
        ProductManager.listProducts.push(new product('s005', 'kẹo ', 5, 1000))
    }
     showList():product[] {
        return ProductManager.listProducts;
    }
    static showRevenue(){
        return ProductManager.revenue
    }
    static calculateRevenue(total:number){
        ProductManager.revenue = ProductManager.revenue += total
    }
    static addProduct(newProduct:product):void {
        ProductManager.listProducts.push(newProduct)
    }
    static editProduct(id:string,updateItem:product):void{
            let index = this.findById(id);
            if(index !=1){
                ProductManager.listProducts[index]= updateItem
            }
    }
    static findById(id:string):number {
        for (let i in ProductManager.listProducts){
            if(id==ProductManager.listProducts[i].getId()){
                return +i;
            }
        }
        return -1;
    }
    static editQuantity(id:string,quantity:number):void {
        let index = this.findById(id);
        ProductManager.listProducts[index].quantity -= quantity;
    }
    static deleteProduct(id:string):void {
            let index = this.findById(id);
            if(index != -1){
                ProductManager.listProducts.splice(index, 1);
            }
    }
    static checkQuantity(id:string):number|any {
        this.findById(id);
        let quantity = 0;
        for(let i in ProductManager.listProducts){
            if(ProductManager.listProducts[i].quantity>0){
                return quantity += ProductManager.listProducts[i].quantity;
            }
            return -1;
        }
    }
}