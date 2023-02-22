"use strict";
exports.__esModule = true;
var productManager_1 = require("./controller/productManager");
var adminManager_1 = require("./controller/adminManager");
var MainMenu_1 = require("./view/MainMenu");
var supplyManager = new productManager_1.ProductManager();
var adminManager = new adminManager_1.AdminManager();
var login = new MainMenu_1.MainMenu();
login.mainMenu();
