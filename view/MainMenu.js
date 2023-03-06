"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var chalk = require("chalk");
var readlineSync = require('readline-sync');
var adminManager_1 = require("../controller/adminManager");
var AdminMenu_1 = require("./AdminMenu");
var UserMenu_1 = require("./UserMenu");
var register_1 = require("./register");
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        var _this = this;
        this.menu = "-------* welcome to supermarket of me *--------\n 1.login\n 2.register\n 3.exit";
        this.mainMenu = function () {
            var isLoop = true;
            var inputID = '';
            var inputPassword = '';
            var choice = 0;
            var inCorrectChoice;
            var correctChoice;
            while (isLoop) {
                console.log(_this.menu);
                choice = +readlineSync.question('enter your choice:');
                inCorrectChoice = choice <= 0 || choice >= 4;
                correctChoice = choice >= 1 || choice <= 3;
                if (inCorrectChoice) {
                    console.log(chalk.red(' {!!}wrong choice please try again'));
                }
                else {
                    switch (choice) {
                        case 1:
                            var adminMenu = new AdminMenu_1.AdminMenu;
                            var userMenu = new UserMenu_1.UserMenu;
                            var isLoop1 = true;
                            while (isLoop1) {
                                inputID = readlineSync.question('(ID):');
                                inputPassword = readlineSync.question('password:');
                                var checkLogin = adminManager_1.AdminManager.checkLogin(inputID, inputPassword);
                                var idUnavailable = -1;
                                if (checkLogin == idUnavailable) {
                                    console.log(chalk.red('{!!}wrong id or password,please try again'));
                                }
                                else if (adminManager_1.AdminManager.UserList[adminManager_1.AdminManager.findById(inputID)].locked) {
                                    console.log(chalk.yellow('{!!}Account has been locked, please contact admin for support'));
                                }
                                else {
                                    console.log(chalk.green('-=*login success*= -'));
                                    isLoop1 = false;
                                }
                            }
                            var indexOfID = adminManager_1.AdminManager.findById(inputID);
                            var user1 = 1;
                            // console.log(checkRole);
                            // console.log(123);
                            var checkRole = adminManager_1.AdminManager.UserList[indexOfID].role;
                            if (checkRole == user1) {
                                userMenu.userMenu();
                                console.log("welcome user ".concat(user1));
                            }
                            else {
                                adminMenu.adminMenu();
                                console.log('welcome admin');
                            }
                            break;
                        case 2:
                            var register = new register_1.Register;
                            var newUser = register.register();
                            adminManager_1.AdminManager.addUser(newUser);
                            break;
                        case 3:
                            return false;
                    }
                }
            }
        };
    }
    return MainMenu;
}());
exports.MainMenu = MainMenu;
