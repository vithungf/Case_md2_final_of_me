"use strict";
exports.__esModule = true;
exports.UserMenu = void 0;
var readlineSync = require('readline-sync');
var product_1 = require("../model/product");
var productManager_1 = require("../controller/productManager");
var UserCart_1 = require("../controller/UserCart");
var MainMenu_1 = require("./MainMenu");
var chalk = require('chalk');
var UserMenu = /** @class */ (function () {
    function UserMenu() {
        this.userCart = new UserCart_1.UserCart('', '', 0, 0);
        this.logout = new MainMenu_1.MainMenu();
        this.menu = "\n    ------*user menu*--------\n    1.show list\n    2.add item to cart\n    3.show cart \n    4.edit cart\n    5 pay cart\n    6.search by name\n    7.history\n    8.logout";
    }
    UserMenu.prototype.userMenu = function () {
        var isIdExistProduct = 0;
        var isIdExistCart = 0;
        var no = -1;
        var indexProduct = 0;
        var indexCart = 0;
        var inputQuantity = 0;
        // let listProducts = new ProductManager()
        while (true) {
            console.log(this.menu);
            var choice = +readlineSync.question('-pick your choice-:');
            var inCorrectChoice = void 0;
            var correctChoice = void 0;
            inCorrectChoice = choice <= 0 || choice >= 9;
            correctChoice = choice >= 1 || choice <= 8;
            if (inCorrectChoice) {
                console.log(chalk.yellow('{!!}wrong choice, please try again'));
            }
            else {
                switch (choice) {
                    case 1:
                        // let product = new ProductManager()
                        console.table(productManager_1.ProductManager.listProducts);
                        break;
                    case 2:
                        var inputID = readlineSync.question('id item: ');
                        var isLoop = true;
                        while (isLoop) {
                            isIdExistProduct = indexProduct = productManager_1.ProductManager.findById(inputID);
                            isIdExistCart = indexCart = this.userCart.findById(inputID);
                            if (isIdExistProduct == no) {
                                console.log(chalk.yellow('{!!}this item is not exist,please try again'));
                                break;
                            }
                            else {
                                var isLoop2 = true;
                                while (isLoop2) {
                                    inputQuantity = readlineSync.question('quantity:');
                                    if (isIdExistCart) {
                                        var itemProduct = productManager_1.ProductManager.checkQuantity(inputID);
                                        if (inputQuantity > itemProduct) {
                                            console.log(chalk.red('{!!}amount is not enough. Please try again'));
                                            break;
                                        }
                                        else {
                                            this.addItemNoExistCart(inputID, inputQuantity, indexProduct);
                                            console.log(chalk.green('-=* add item successfully *=-'));
                                            isLoop2 = false;
                                        }
                                    }
                                }
                                isLoop = false;
                            }
                        }
                        break;
                    case 3:
                        console.table(this.userCart.showList());
                        break;
                    case 4:
                        var isLoop3 = true;
                        while (isLoop3) {
                            var inputId = readlineSync.question('Id: ');
                            var indexCart_1 = this.userCart.findById(inputId);
                            var indexSupply = productManager_1.ProductManager.findById(inputId);
                            var notExist = -1;
                            if (indexCart_1 == notExist) {
                                console.log(chalk.red('{!!} This item is not exist in cart. please try again'));
                                break;
                            }
                            else {
                                var inputQuantity_1 = +readlineSync.question('Quantity: ');
                                var removeItemInCart = inputQuantity_1 >= this.userCart.itemList[indexCart_1].quantity;
                                var itemInCartQuantity = this.userCart.itemList[indexCart_1].quantity;
                                if (removeItemInCart) {
                                    var clearCart = 0;
                                    this.userCart.itemList[indexCart_1].quantity = clearCart;
                                    this.addItemBackProduct(indexSupply, inputQuantity_1);
                                    console.log(chalk.green('-=* Edit cart successful *=-'));
                                    isLoop3 = false;
                                }
                                else {
                                    this.userCart.itemList[indexCart_1].quantity = itemInCartQuantity - inputQuantity_1;
                                    this.addItemBackProduct(indexSupply, inputQuantity_1);
                                    console.log(chalk.green(' -=* Edit cart successful *=-'));
                                    isLoop3 = false;
                                }
                            }
                        }
                        break;
                    case 5:
                        console.log('total:$' + this.userCart.bill());
                        console.log(chalk.green('-=* payment done, thanks *=-'));
                        break;
                    case 6:
                        var name_1 = readlineSync.question('Name to search: ');
                        var foundProducts = productManager_1.ProductManager.searchByName(name_1);
                        if (foundProducts.length === 0) {
                            console.log(chalk.yellow('{!!} No products found with that name.'));
                        }
                        else {
                            console.log(chalk.green('=== Products Found ==='));
                            console.table(foundProducts);
                        }
                        break;
                    case 7:
                        console.table(productManager_1.ProductManager.soldList);
                        console.log('total money pay:$' + productManager_1.ProductManager.showRevenue());
                        break;
                    case 8:
                        this.logout.mainMenu();
                        console.log(chalk.green('-=* logout successful *=-'));
                        break;
                }
            }
        }
    };
    UserMenu.prototype.addItemNoExistCart = function (inputID, inputQuantity, indexProduct) {
        var newItem = new product_1.product(inputID, productManager_1.ProductManager.listProducts[indexProduct].name, productManager_1.ProductManager.listProducts[indexProduct].price, inputQuantity);
        this.userCart.addItem(newItem);
        productManager_1.ProductManager.listProducts[indexProduct].quantity = productManager_1.ProductManager.listProducts[indexProduct].quantity - inputQuantity;
    };
    UserMenu.prototype.addItemExistCart = function (indexCart, inputQuantity, indexProduct) {
        this.userCart.itemList[indexCart].quantity = productManager_1.ProductManager.listProducts[indexCart].quantity + inputQuantity;
        productManager_1.ProductManager.listProducts[indexProduct].quantity = productManager_1.ProductManager.listProducts[indexProduct].quantity - inputQuantity;
    };
    UserMenu.prototype.addItemBackProduct = function (indexProduct, inputQuantity) {
        productManager_1.ProductManager.listProducts[indexProduct].quantity = productManager_1.ProductManager.listProducts[indexProduct].quantity + inputQuantity;
    };
    return UserMenu;
}());
exports.UserMenu = UserMenu;
