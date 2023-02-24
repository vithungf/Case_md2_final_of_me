"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var product_1 = require("../model/product");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        ProductManager.listProducts.push(new product_1.product('s001', 'hoa tươi', 1000, 100));
        ProductManager.listProducts.push(new product_1.product('s002', 'thịt', 500, 100));
        ProductManager.listProducts.push(new product_1.product('s003', 'cam', 10, 200));
        ProductManager.listProducts.push(new product_1.product('s004', 'táo', 2000, 50));
        ProductManager.listProducts.push(new product_1.product('s005', 'kẹo ', 5, 1000));
    }
    ProductManager.prototype.showList = function () {
        return ProductManager.listProducts;
    };
    ProductManager.showRevenue = function () {
        return ProductManager.revenue;
    };
    ProductManager.calculateRevenue = function (total) {
        ProductManager.revenue = ProductManager.revenue += total;
    };
    ProductManager.addProduct = function (newProduct) {
        ProductManager.listProducts.push(newProduct);
    };
    ProductManager.editProduct = function (id, updateItem) {
        var index = this.findById(id);
        if (index != 1) {
            ProductManager.listProducts[index] = updateItem;
        }
    };
    ProductManager.findById = function (id) {
        for (var i in ProductManager.listProducts) {
            if (id == ProductManager.listProducts[i].getId()) {
                return +i;
            }
        }
        return -1;
    };
    ProductManager.editQuantity = function (id, quantity) {
        var index = this.findById(id);
        ProductManager.listProducts[index].quantity -= quantity;
    };
    ProductManager.deleteProduct = function (id) {
        var index = this.findById(id);
        if (index != -1) {
            ProductManager.listProducts.splice(index, 1);
        }
    };
    ProductManager.checkQuantity = function (id) {
        this.findById(id);
        var quantity = 0;
        for (var i in ProductManager.listProducts) {
            if (ProductManager.listProducts[i].quantity > 0) {
                return quantity += ProductManager.listProducts[i].quantity;
            }
            return -1;
        }
    };
    ProductManager.listProducts = [];
    ProductManager.soldList = [];
    ProductManager.revenue = 0;
    return ProductManager;
}());
exports.ProductManager = ProductManager;
