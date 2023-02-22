"use strict";
exports.__esModule = true;
exports.UserCart = void 0;
var productManager_1 = require("./productManager");
var UserCart = /** @class */ (function () {
    function UserCart(id, name, quantity, totalPrice) {
        if (id === void 0) { id = ''; }
        if (name === void 0) { name = ''; }
        if (quantity === void 0) { quantity = 0; }
        if (totalPrice === void 0) { totalPrice = 0; }
        this.itemList = [];
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    UserCart.prototype.showList = function () {
        return this.itemList;
    };
    UserCart.prototype.addItem = function (newItem) {
        this.itemList.push(newItem);
    };
    UserCart.prototype.editCart = function (id, quantity) {
        var index = this.findById(id);
        this.itemList[index].quantity = this.itemList[index].quantity - quantity;
    };
    UserCart.prototype.findById = function (id) {
        for (var i in this.itemList) {
            if (id == this.itemList[i].getId()) {
                return +i;
            }
        }
        return -1;
    };
    UserCart.prototype.checkQuantity = function (id) {
        var index = this.findById(id);
        var noExist = -1;
        if (index == noExist) {
            return -1;
        }
        else {
            return this.itemList[index].quantity;
        }
    };
    UserCart.prototype.bill = function () {
        var total = 0;
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var i = _a[_i];
            total += (i.price * i.quantity);
            productManager_1.ProductManager.soldList.push(i);
        }
        var clearCart = [];
        this.itemList = clearCart;
        var totalRounded = Math.round(total * 100) / 100;
        productManager_1.ProductManager.calculateRevenue(totalRounded);
        return totalRounded;
    };
    return UserCart;
}());
exports.UserCart = UserCart;
