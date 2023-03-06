import {AdminMenu} from "./AdminMenu";

var readlineSync = require('readline-sync');
import {product} from "../model/product";
import {ProductManager} from "../controller/productManager";
import { exit } from "process";
const chalk = require('chalk');
export class AdminMenuProductManager {
    menu = `
    ------* menu admin *------
        1.show List Products
        2.add Product
        3.edit Product
        4.delete Product
        5.Revenue Product 
        6.exit`

    AdminMenuProductManager() {
        let inCorrectChoice: any;
        let correctChoice: any;
        let back = new AdminMenu();
        let inputId: string;
        let inputName: string;
        let inputPrice: number;
        let inputQuantity: number;
        let no: number;
        let isIdAvailable: number;
        let isIdExist: number;

        do {
            console.log(this.menu)
            let choice = +readlineSync.question("enter your choice:")
            inCorrectChoice = choice <= 0 || choice >= 7;
            correctChoice = choice => 1 || choice <= 6;
            if (inCorrectChoice) {
                console.log(chalk.yellow('{!!}wrong choice,please try again '))
            } else {
                switch (choice) {
                    case 1:
                        console.table(ProductManager.listProducts);
                        break;
                    case 2:
                        inputId = readlineSync.question('id:');
                        isIdExist = ProductManager.findById(inputId);
                        let index = isIdExist;
                        no = -1
                        if (isIdExist == no) {
                            inputName = readlineSync.question('name:');
                            inputPrice = readlineSync.question('price:');
                            inputQuantity = readlineSync.question('quantity:');
                            let newProduct = new product(inputId, inputName, inputPrice, inputQuantity)
                            ProductManager.addProduct(newProduct);
                            console.log(chalk.green('-=* add product success *=-'));
                        } else {
                            inputQuantity = readlineSync.question('quantity:');
                            ProductManager.listProducts[index].quantity = ProductManager.listProducts[index].quantity + inputQuantity
                            console.log(chalk.green('-=* add products success *=-'));
                        }
                        break;
                    case 3:
                        inputId = readlineSync.question('id:');
                        no = -1;
                        isIdExist = ProductManager.findById(inputId);
                        if (isIdExist == no) {
                            console.log(chalk.yellow('{!!}this ID is not exist. pls try again'))
                        } else {
                            inputName = readlineSync.question('name:');
                            inputPrice = readlineSync.question('price:');
                            inputQuantity = readlineSync.question('quantity:');
                            let updateProduct = new product(inputId, inputName, inputPrice, inputQuantity);
                            ProductManager.editProduct(inputId, updateProduct);
                            console.log(chalk.green('-=* edit success *=-'))
                        }
                        break;
                    case 4:
                        inputId = readlineSync.question('Id:');
                        no = -1;
                        isIdAvailable = ProductManager.findById(inputId);
                        if (isIdAvailable == no) {
                            console.log(chalk.yellow('{!!}this is id not exist. pls try again'));
                        } else {
                            ProductManager.deleteProduct(inputId);
                            console.log(chalk.green('-=* delete success *=-'))
                        }
                        break;
                    case 5:
                        console.table(ProductManager.soldList)
                        console.log('revenue:$' + ProductManager.showRevenue());
                        break;
                    case 6:
                        return back.adminMenu();
                        console.log(chalk.green('-=*exit success*=-'))

                }
            }

        } while (correctChoice)
    }


}
