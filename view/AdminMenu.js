"use strict";
exports.__esModule = true;
exports.AdminMenu = void 0;
var readlineSync = require('readline-sync');
var MainMenu_1 = require("./MainMenu");
var AdminMenuUserManager_1 = require("./AdminMenuUserManager");
var AdminMenuProductManager_1 = require("./AdminMenuProductManager");
var chalk = require('chalk');
var AdminMenu = /** @class */ (function () {
    function AdminMenu() {
        this.adminMenuUserManager = new AdminMenuUserManager_1.AdminMenuUserManager();
        this.adminMenuSupplyManager = new AdminMenuProductManager_1.AdminMenuProductManager();
        this.menu = "\n    ----------* Administrator Menu *----------\n    1. User Manager\n    2. Product Manager\n    3. Logout\n    ";
    }
    AdminMenu.prototype.adminMenu = function () {
        var logout = new MainMenu_1.MainMenu();
        while (true) {
            console.log(this.menu);
            var choice = +readlineSync.question('Pick your choice: ');
            var inCorrectChoice = void 0;
            var correctChoice = void 0;
            inCorrectChoice = choice <= 0 || choice >= 4;
            correctChoice = choice >= 1 || choice <= 3;
            if (inCorrectChoice) {
                console.log(chalk.red('{!!} wrong choice, please try again '));
            }
            else {
                switch (choice) {
                    case 1:
                        this.adminMenuUserManager.adminMenuManager();
                        break;
                    case 2:
                        this.adminMenuSupplyManager.AdminMenuProductManager();
                        break;
                    case 3:
                        return logout.mainMenu;
                }
            }
        }
    };
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;
