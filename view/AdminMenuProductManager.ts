import {AdminMenu} from "./AdminMenu";

var readlineSync = require('readline-sync');
import {product} from "../model/product";
import {ProductManager} from "../controller/productManager";

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
                console.log('{!!}wrong choice,pls choice again ')
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
                            console.log('-=* add product success *=-');
                        } else {
                            inputQuantity = readlineSync.question('quantity:');
                            ProductManager.listProducts[index].quantity = ProductManager.listProducts[index].quantity + inputQuantity
                            console.log('-=* add products success *=-');
                        }
                        break;
                    case 3:
                        inputId = readlineSync.question('id:');
                        no = -1;
                        isIdExist = ProductManager.findById(inputId);
                        if (isIdExist == no) {
                            console.log('{!!}this ID is not exist. pls try again')
                        } else {
                            inputName = readlineSync.question('name:');
                            inputPrice = readlineSync.question('price:');
                            inputQuantity = readlineSync.question('quantity:');
                            let updateProduct = new product(inputId, inputName, inputPrice, inputQuantity);
                            ProductManager.editProduct(inputId, updateProduct);
                            console.log('-=* edit success *=-')
                        }
                        break;
                    case 4:
                        inputId = readlineSync.question('Id:');
                        no = -1;
                        isIdAvailable = ProductManager.findById(inputId);
                        if (isIdAvailable == no) {
                            console.log('{!!}this is id not exist. pls try again');
                        } else {
                            ProductManager.deleteProduct(inputId);
                            console.log('-=* delete success *=-')
                        }
                        break;
                    case 5:
                        console.table(ProductManager.soldList)
                        console.log('revenue:$' + ProductManager.showRevenue());
                        break;
                    case 6:
                        return back.adminMenu();

                }
            }

        } while (correctChoice)
    }


}
