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
    // static IsLock(id: string, isLock: boolean): void {
    //     let index = this.findById(id);
    //     if (index !== -1) { // Kiểm tra xem tài khoản có tồn tại trong danh sách hay không
    //         let user = AdminManager.UserList[index];
    //         if (isLock) {
    //             user.isLock = true; // Khóa tài khoản
    //         } else {
    //             AdminManager.UserList[index] = undefined; // Xóa tài khoản khỏi danh sách
    //         }
    //     }
    // }
    AdminManager.checkLogin = function (id, password) {
        var checkID = this.findById(id);
        var notExist = -1;
        if (checkID !== notExist) {
            for (var i in AdminManager.UserList[checkID]) {
                if (password == AdminManager.UserList[checkID].getPassword()) {
                    return +i;
                }
            }
            return -1;
        }
    };
    AdminManager.checkAdmin = function (user) {
        if (user.role == 1) {
            return 1;
        }
        return 0;
    };
    AdminManager.UserList = [];
    return AdminManager;
}());
exports.AdminManager = AdminManager;
