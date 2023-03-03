"use strict";
exports.__esModule = true;
exports.AdminMenuUserManager = void 0;
var AdminMenu_1 = require("./AdminMenu");
var readlineSync = require('readline-sync');
var adminManager_1 = require("../controller/adminManager");
var user_1 = require("../model/user");
var AccountValidate_1 = require("../controller/AccountValidate");
var chalk = require('chalk');
var AdminMenuUserManager = /** @class */ (function () {
    function AdminMenuUserManager() {
        this.menu = "\n    ----------*User Manager*----------\n    1.Show list user\n    2.Add user \n    3.edit user\n    4.remove user\n    5.locked\n    6.unlocked\n    7.exit";
    }
    AdminMenuUserManager.prototype.adminMenuManager = function () {
        var back = new AdminMenu_1.AdminMenu();
        console.log(this.menu);
        var choice = +readlineSync.question('Pick your choice: ');
        var inputId = '';
        var inputName = '';
        var inputPassword = '';
        var isIdExist = 0;
        var no = -1;
        var idValidate = new AccountValidate_1.IdValidate();
        var passwordValidate = new AccountValidate_1.PasswordValidate();
        var isLoopPassword = true;
        var inCorrectChoice;
        var correctChoice;
        inCorrectChoice = choice <= 0 || choice >= 8;
        correctChoice = choice >= 1 || choice <= 7;
        if (inCorrectChoice) {
            console.log(chalk.red('{!!}wrong choice, please try again'));
        }
        else if (correctChoice) {
            switch (choice) {
                case 1:
                    console.table(adminManager_1.AdminManager.UserList);
                    this.adminMenuManager();
                    break;
                case 2:
                    var isLoopId = true;
                    while (isLoopId) {
                        console.log(chalk.blue('id need at least 2 word, please try again'));
                        inputId = readlineSync.question('id:');
                        var isIdvalidate = adminManager_1.AdminManager.findById(inputId);
                        if (!idValidate.Validate(inputId)) {
                            console.log(chalk.red('{!!}wrong type of id,please try again'));
                            continue;
                        }
                        else if (isIdvalidate != -1) {
                            console.log(chalk.red('{!!}this ID is validate.please try again'));
                            continue;
                        }
                        else {
                            isLoopId = false;
                        }
                    }
                    while (isLoopPassword) {
                        console.log(chalk.blue('password need at least 6 word and special characters'));
                        inputPassword = readlineSync.question('password:');
                        if (passwordValidate.Validate(inputPassword)) {
                            var inputName_1 = readlineSync.question('NAME:');
                            var newUser = new user_1.User(inputId, inputName_1, inputPassword);
                            adminManager_1.AdminManager.addUser(newUser);
                            console.log(chalk.green('-=* add new user success *=-'));
                            this.adminMenuManager();
                            break;
                        }
                        else {
                            console.log(chalk.red('wrong password,please try again'));
                            continue;
                        }
                    }
                    break;
                case 3:
                    inputId = readlineSync.question('ID:');
                    isIdExist = adminManager_1.AdminManager.findById(inputId);
                    if (isIdExist == no) {
                        console.log(chalk.red('{!!}this id unavailable,please try again'));
                        this.adminMenuManager();
                        break;
                    }
                    else {
                        while (isLoopPassword) {
                            console.log(chalk.blue('password need at least 6 word and special characters'));
                            inputPassword = readlineSync.question('new password:');
                            if (passwordValidate.Validate(inputPassword)) {
                                isLoopPassword = false;
                                break;
                            }
                            else {
                                console.log(chalk.red('{!!}wrong password,please try again'));
                            }
                        }
                        inputName = readlineSync.question(' new name:');
                        var updateUser = new user_1.User(inputId, inputName, inputPassword);
                        adminManager_1.AdminManager.editUser(inputId, updateUser);
                        console.log(chalk.green('-=* edit user successfully *=-'));
                        this.adminMenuManager();
                        break;
                    }
                case 4:
                    inputId = readlineSync.question('id:');
                    isIdExist = adminManager_1.AdminManager.findById(inputId);
                    if (isIdExist == no) {
                        console.log(chalk.red('{!!}this is id not exist,please try again'));
                        this.adminMenuManager();
                        break;
                    }
                    else {
                        adminManager_1.AdminManager.deleteUser(inputId);
                        console.log(chalk.green('-=* delete user successfully *=-'));
                        this.adminMenuManager();
                        break;
                    }
                case 5:
                    inputId = readlineSync.question('Input user ID to lock: ');
                    isIdExist = adminManager_1.AdminManager.findById(inputId);
                    if (isIdExist == no) {
                        console.log(chalk.red('{!!}This ID does not exist. Please try again.'));
                        this.adminMenuManager();
                        break;
                    }
                    else {
                        adminManager_1.AdminManager.lockUser(inputId);
                        console.log(chalk.green('-=* User locked successfully *=-'));
                        this.adminMenuManager();
                        break;
                    }
                case 6:
                    inputId = readlineSync.question('input user ID to un:');
                    isIdExist = adminManager_1.AdminManager.findById(inputId);
                    if (isIdExist == no) {
                        console.log(chalk.red('{!!}this id not exist, please try again'));
                        this.adminMenuManager();
                        break;
                    }
                    else {
                        adminManager_1.AdminManager.unlockUser(inputId);
                        console.log(chalk.green('-=* unlocked user successfully *=-'));
                        this.adminMenuManager();
                        break;
                    }
                case 7:
                    return back.adminMenu;
                    console.log(chalk.green('-=* exit successfully*=-'));
            }
        }
    };
    return AdminMenuUserManager;
}());
exports.AdminMenuUserManager = AdminMenuUserManager;
