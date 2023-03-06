"use strict";
exports.__esModule = true;
exports.AdminManager = void 0;
var user_1 = require("../model/user");
var AdminManager = /** @class */ (function () {
    function AdminManager() {
        this.role = 1;
        AdminManager.UserList.push(new user_1.User('hung', 'Hung', '123', 0));
        AdminManager.UserList.push(new user_1.User('hung2', 'Hung2', '123', 1));
        AdminManager.UserList.push(new user_1.User('hung13', 'Hung3', '123', 1));
        AdminManager.UserList.push(new user_1.User('hung12', 'Hung4', '123', 1));
        AdminManager.UserList.push(new user_1.User('lekhuyen1508', 'lệ khuyên', '123', 1));
        // role = 0 => admin
        // role = 1 => user
    }
    AdminManager.showListUser = function () {
        return AdminManager.UserList;
    };
    AdminManager.addUser = function (newUser) {
        AdminManager.UserList.push(newUser);
    };
    AdminManager.findById = function (id) {
        for (var i in AdminManager.UserList) {
            if (id == AdminManager.UserList[i].getId()) {
                return +i;
            }
        }
        return -1;
    };
    AdminManager.deleteUser = function (id) {
        var index = this.findById(id);
        var notExist = -1;
        if (index !== notExist) {
            AdminManager.UserList.splice(index, 1);
        }
        else {
            return;
        }
    };
    AdminManager.editUser = function (id, updateUser) {
        var index = this.findById(id);
        var notExist = -1;
        if (index !== notExist) {
            AdminManager.UserList[index] = updateUser;
        }
    };
    AdminManager.checkLogin = function (id, password) {
        var checkID = this.findById(id);
        var notExist = -1;
        if (checkID === notExist) {
            // user with the given id doesn't exist
            return -1;
        }
        var user = AdminManager.UserList[checkID];
        if (user.getPassword() !== password) {
            // password doesn't match
            return -1;
        }
        // user and password are correct, return the user's index
        return checkID;
    };
    AdminManager.checkAdmin = function (user) {
        if (user.role == 1) {
            return 1;
        }
        return 0;
    };
    // const user = this("abc123"); // Hàm findUserById() được giả định đã được triển khai
    // user.lock();
    AdminManager.lockUser = function (id) {
        var userIndex = this.UserList.findIndex(function (user) { return user.id === id; });
        if (userIndex !== -1) {
            this.UserList[userIndex].locked = true;
        }
    };
    AdminManager.unlockUser = function (id) {
        var userIndex = this.UserList.findIndex(function (user) { return user.id === id; });
        if (userIndex !== -1) {
            this.UserList[userIndex].locked = false;
        }
    };
    AdminManager.UserList = [];
    return AdminManager;
}());
exports.AdminManager = AdminManager;
