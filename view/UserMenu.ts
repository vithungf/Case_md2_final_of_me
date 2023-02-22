import {MainMenu} from "./MainMenu";

var readlineSync = require('readline-sync');

import {product} from "../model/product";
import {ProductManager} from "../controller/productManager";
import {UserCart} from "../controller/UserCart";
// import {MainMenu} from "./MainMenu";

export class UserMenu {

    userCart = new UserCart('', '', 0, 0);
    logout = new MainMenu()

    menu = `
    ------*user menu*--------
    1.show list
    2.add item
    3.show cart 
    4.edit cart
    5 pay cart
    6.logout`

    userMenu(){
        let isIdExistProduct = 0;
        let isIdExistCart = 0;
        let no = -1;
        let indexProduct = 0;
        let indexCart = 0;
        let inputQuantity = 0;
        while (true){
            console.log(this.menu)
            let choice = +readlineSync.question('-pick your choice-:')
            switch(choice){
                case 1:
                    // let product = new ProductManager()
                    console.table(ProductManager.listProducts)
                    break;
                case 2:
                    let inputID = readlineSync.question('id item: ')
                    let isLoop = true;
                    while(isLoop){
                        isIdExistProduct = indexProduct = ProductManager.findById(inputID)
                        isIdExistCart = indexCart =this.userCart.findById(inputID)
                        if(isIdExistProduct == no ){
                            console.log('{!!}this item is not exist,please try again');
                            break;
                        }else{
                            let isLoop2 = true
                            while(isLoop2){
                                inputQuantity = readlineSync.question('quantity:')
                                if (isIdExistCart){
                                    let itemProduct: any = ProductManager.checkQuantity(inputID)
                                    if (inputQuantity> itemProduct){
                                        console.log('{!!}Storage is not enough. Please try again')
                                        break;
                                    }else{
                                        this.addItemNoExistCart(inputID,inputQuantity,indexProduct)
                                        console.log('-=* add item successfully *=-')
                                        isLoop2 = false
                                    }
                                }else{
                                    this.addItemExistCart(indexCart,inputQuantity,indexProduct)
                                    console.log('-=* add item to cart successfully *=-')
                                    isLoop2 = false
                                }
                            }
                            isLoop = false
                        }
                    }
                    break;
                case 3:
                    console.table(this.userCart.showList())
                    break;
                case 4:
                    let isLoop3 = true;
                    while (isLoop3) {
                        let inputId = readlineSync.question('Id: ');
                        let indexCart = this.userCart.findById(inputId);
                        let indexSupply = ProductManager.findById(inputId);
                        let notExist = -1;
                        if (indexCart == notExist) {
                            console.log('{!!} This item is not exist in cart. Please try again');
                            break;
                        } else {
                            let inputQuantity = +readlineSync.question('Quantity: ');
                            let removeItemInCart = inputQuantity >= this.userCart.itemList[indexCart].quantity;
                            let itemInCartQuantity = this.userCart.itemList[indexCart].quantity;
                            if (removeItemInCart) {
                                let clearCart = 0;
                                this.userCart.itemList[indexCart].quantity = clearCart;
                                this.addItemBackProduct(indexSupply, inputQuantity);
                                console.log('-=* Edit cart successful *=-');
                                isLoop3 = false;
                            } else {
                                this.userCart.itemList[indexCart].quantity = itemInCartQuantity - inputQuantity;
                                this.addItemBackProduct(indexSupply, inputQuantity);
                                console.log(' -=* Edit cart successful *=-');
                                isLoop3 = false;
                            }
                        }
                    }
                    break;
                case 5:
                    console.log('$' +this.userCart.bill())
                    console.log('-=* payment done, thanks *=-')
                    break;
                case 6:

                    return this.logout.mainMenu()
            }
        }
    }

    private addItemNoExistCart(inputID: string, inputQuantity: number, indexProduct: number) {
        let newItem = new product(inputID,ProductManager.listProducts[indexProduct].name,ProductManager.listProducts[indexProduct].price,inputQuantity)
        this.userCart.addItem(newItem)
        ProductManager.listProducts[indexProduct].quantity = ProductManager.listProducts[indexProduct].quantity - inputQuantity
    }
    private addItemExistCart(indexCart:number,inputQuantity:number,indexProduct:number){
        this.userCart.itemList[indexCart].quantity = ProductManager.listProducts[indexCart].quantity + inputQuantity
        ProductManager.listProducts[indexProduct].quantity = ProductManager.listProducts[indexProduct].quantity - inputQuantity
    }

    private addItemBackProduct(indexProduct: any, inputQuantity: number) {
        ProductManager.listProducts[indexProduct].quantity = ProductManager.listProducts[indexProduct].quantity + inputQuantity

    }
}