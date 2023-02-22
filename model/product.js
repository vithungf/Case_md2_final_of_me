"use strict";
exports.__esModule = true;
exports.product = void 0;
var product = /** @class */ (function () {
    function product(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    product.prototype.getId = function () {
        return this.id;
    };
    product.prototype.getName = function () {
        return this.name;
    };
    product.prototype.getPrice = function () {
        return this.price;
    };
    product.prototype.getQuantity = function () {
        return this.quantity;
    };
    product.prototype.setId = function (id) {
        this.id = id;
    };
    product.prototype.setName = function (name) {
        this.name = name;
    };
    product.prototype.setPrice = function (price) {
        this.price = price;
    };
    product.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return product;
}());
exports.product = product;
