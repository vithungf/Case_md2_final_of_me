"use strict";
exports.__esModule = true;
exports.Register = void 0;
var AccountValidate_1 = require("../Controller/AccountValidate");
var AdminManager_1 = require("../Controller/AdminManager");
var MainMenu_1 = require("./MainMenu");
var user_1 = require("../model/user");
var chalk = require("chalk");
var readlineSync = require('readline-sync');
var Register = /** @class */ (function () {
    function Register() {
        this.idValidate = new AccountValidate_1.IdValidate();
        this.passwordValidate = new AccountValidate_1.PasswordValidate();
        this.back = new MainMenu_1.MainMenu();
    }
    Register.prototype.register = function () {
        var inputId = '';
        var isLoop = true;
        var newUser;
        while (isLoop) {
            console.log(chalk.blue('[i] ID need at least 2 words, not include symbol'));
            inputId = readlineSync.question('Id: ');
            if (this.idValidate.Validate(inputId)) {
                var yes = -1;
                var isIdAvailable = AdminManager_1.AdminManager.findById(inputId);
                if (isIdAvailable == yes) {
                    isLoop = false;
                }
                else {
                    console.log(chalk.red('[!!!] This ID is unavailable. Please try again'));
                    continue;
                }
            }
            else {
                console.log(chalk.red('[!!!] Wrong type of ID. Please try again'));
                continue;
            }
        }
        var isLoop2 = true;
        while (isLoop2) {
            console.log(chalk.blue('[i] Password need at lease 6 words, include alphabet and at least 1 symbol [#?!@$%^&*-]'));
            var inputPassword = readlineSync.question('Password: ');
            if (this.passwordValidate.Validate(inputPassword)) {
                var inputName = readlineSync.question('Name: ');
                newUser = new user_1.User(inputId, inputName, inputPassword);
                console.log(chalk.green('[v] Signup successful'));
                return newUser;
            }
            else {
                console.log(chalk.red('[!!!] Wrong type of password. Please try again'));
                continue;
            }
        }
    };
    return Register;
}());
exports.Register = Register;
