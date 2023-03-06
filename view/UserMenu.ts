
var readlineSync = require('readline-sync');

import {product} from "../model/product";
import {ProductManager} from "../controller/productManager";
import {UserCart} from "../controller/UserCart";
import {MainMenu} from "./MainMenu";
const chalk = require('chalk');

export class UserMenu {

    userCart = new UserCart('', '', 0, 0);
    logout = new MainMenu()

    menu = `
    ------*user menu*--------
    1.show list
    2.add item to cart
    3.show cart 
    4.edit cart
    5 pay cart
    6.search by name
    7.history
    8.logout`

    
    
    userMenu(){
        let isIdExistProduct = 0;
        let isIdExistCart = 0;
        let no = -1;
        let indexProduct = 0;
        let indexCart = 0;
        let inputQuantity = 0;
        // let listProducts = new ProductManager()
        
        while (true){
            console.log(this.menu)
            let choice = +readlineSync.question('-pick your choice-:')
            let inCorrectChoice : any
            let correctChoice : any
            inCorrectChoice = choice <= 0 || choice >=9
            correctChoice = choice >= 1 || choice <= 8
            if(inCorrectChoice){
                console.log(chalk.red('{!!}wrong choice, please try again'));
            }else{
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
                        isIdExistCart = indexCart = this.userCart.findById(inputID)
                        if(isIdExistProduct == no ){
                            console.log(chalk.yellow('{!!}this item is not exist,please try again'));
                            break;
                        }else{
                            let isLoop2 = true
                            while(isLoop2){
                                inputQuantity = readlineSync.question('quantity:')
                                if (isIdExistCart){
                                    let itemProduct: any = ProductManager.checkQuantity(inputID)
                                    if (inputQuantity> itemProduct){
                                        console.log(chalk.red('{!!}amount is not enough. Please try again'))
                                        break;
                                    }else{
                                        this.addItemNoExistCart(inputID,inputQuantity,indexProduct)
                                        console.log(chalk.green('-=* add item successfully *=-'))
                                        isLoop2 = false
                                    }
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
                            console.log(chalk.red('{!!} This item is not exist in cart. please try again'));
                            break;
                        } else {
                            let inputQuantity = +readlineSync.question('Quantity: ');
                            let removeItemInCart = inputQuantity >= this.userCart.itemList[indexCart].quantity;
                            let itemInCartQuantity = this.userCart.itemList[indexCart].quantity;
                            if (removeItemInCart) {
                                let clearCart = 0;
                                this.userCart.itemList[indexCart].quantity = clearCart;
                                this.addItemBackProduct(indexSupply, inputQuantity);
                                console.log(chalk.green('-=* Edit cart successful *=-'));
                                isLoop3 = false;
                            } else {
                                this.userCart.itemList[indexCart].quantity = itemInCartQuantity - inputQuantity;
                                this.addItemBackProduct(indexSupply, inputQuantity);
                                console.log(chalk.green(' -=* Edit cart successful *=-'));
                                isLoop3 = false;
                            }
                        }
                    }
                    break;
                case 5:
                    console.log('total:$' +this.userCart.bill())
                    console.log(chalk.green('-=* payment done, thanks *=-'))
                    break;
                
                case 6:
                    let name = readlineSync.question('Name to search: ');
                    let foundProducts = ProductManager.searchByName(name);
                    if (foundProducts.length === 0) {
                         console.log(chalk.red('{!!} No products found with that name.'));
                    } else {
                          console.log(chalk.green(' Products need Found :'));
                            console.table(foundProducts);
                     }
                     break;

               
                case 7:
                    console.table(ProductManager.soldList)
                        console.log('total money pay:$' + ProductManager.showRevenue());
                        break;  
                        
                case 8:

                        this.logout.mainMenu()
                       console.log(chalk.green('-=* logout successful *=-'))
                       break;
                    }  
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