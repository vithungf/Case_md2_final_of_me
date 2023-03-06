"use strict";
exports.__esModule = true;
exports.AdminMenuProductManager = void 0;
var AdminMenu_1 = require("./AdminMenu");
var readlineSync = require('readline-sync');
var product_1 = require("../model/product");
var productManager_1 = require("../controller/productManager");
var chalk = require('chalk');
var AdminMenuProductManager = /** @class */ (function () {
    function AdminMenuProductManager() {
        this.menu = "\n    ------* menu admin *------\n        1.show List Products\n        2.add Product\n        3.edit Product\n        4.delete Product\n        5.Revenue Product \n        6.exit";
    }
    AdminMenuProductManager.prototype.AdminMenuProductManager = function () {
        var inCorrectChoice;
        var correctChoice;
        var back = new AdminMenu_1.AdminMenu();
        var inputId;
        var inputName;
        var inputPrice;
        var inputQuantity;
        var no;
        var isIdAvailable;
        var isIdExist;
        do {
            console.log(this.menu);
            var choice = +readlineSync.question("enter your choice:");
            inCorrectChoice = choice <= 0 || choice >= 7;
            correctChoice = function (choice) { return 1 || choice <= 6; };
            if (inCorrectChoice) {
                console.log(chalk.yellow('{!!}wrong choice,please try again '));
            }
            else {
                switch (choice) {
                    case 1:
                        console.table(productManager_1.ProductManager.listProducts);
                        break;
                    case 2:
                        inputId = readlineSync.question('id:');
                        isIdExist = productManager_1.ProductManager.findById(inputId);
                        var index = isIdExist;
                        no = -1;
                        if (isIdExist == no) {
                            inputName = readlineSync.question('name:');
                            inputPrice = readlineSync.question('price:');
                            inputQuantity = readlineSync.question('quantity:');
                            var newProduct = new product_1.product(inputId, inputName, inputPrice, inputQuantity);
                            productManager_1.ProductManager.addProduct(newProduct);
                            console.log(chalk.green('-=* add product success *=-'));
                        }
                        else {
                            inputQuantity = readlineSync.question('quantity:');
                            productManager_1.ProductManager.listProducts[index].quantity = productManager_1.ProductManager.listProducts[index].quantity + inputQuantity;
                            console.log(chalk.green('-=* add products success *=-'));
                        }
                        break;
                    case 3:
                        inputId = readlineSync.question('id:');
                        no = -1;
                        isIdExist = productManager_1.ProductManager.findById(inputId);
                        if (isIdExist == no) {
                            console.log(chalk.yellow('{!!}this ID is not exist. pls try again'));
                        }
                        else {
                            inputName = readlineSync.question('name:');
                            inputPrice = readlineSync.question('price:');
                            inputQuantity = readlineSync.question('quantity:');
                            var updateProduct = new product_1.product(inputId, inputName, inputPrice, inputQuantity);
                            productManager_1.ProductManager.editProduct(inputId, updateProduct);
                            console.log(chalk.green('-=* edit success *=-'));
                        }
                        break;
                    case 4:
                        inputId = readlineSync.question('Id:');
                        no = -1;
                        isIdAvailable = productManager_1.ProductManager.findById(inputId);
                        if (isIdAvailable == no) {
                            console.log(chalk.yellow('{!!}this is id not exist. pls try again'));
                        }
                        else {
                            productManager_1.ProductManager.deleteProduct(inputId);
                            console.log(chalk.green('-=* delete success *=-'));
                        }
                        break;
                    case 5:
                        console.table(productManager_1.ProductManager.soldList);
                        console.log('revenue:$' + productManager_1.ProductManager.showRevenue());
                        break;
                    case 6:
                        return back.adminMenu();
                        console.log(chalk.green('-=*exit success*=-'));
                }
            }
        } while (correctChoice);
    };
    return AdminMenuProductManager;
}());
exports.AdminMenuProductManager = AdminMenuProductManager;
