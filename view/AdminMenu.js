"use strict";
exports.__esModule = true;
exports.AdminMenu = void 0;
var readlineSync = require('readline-sync');
var MainMenu_1 = require("./MainMenu");
var AdminMenuUserManager_1 = require("./AdminMenuUserManager");
var AdminMenuProductManager_1 = require("./AdminMenuProductManager");
var AdminMenu = /** @class */ (function () {
    function AdminMenu() {
        this.adminMenuUserManager = new AdminMenuUserManager_1.AdminMenuUserManager();
        this.adminMenuSupplyManager = new AdminMenuProductManager_1.AdminMenuProductManager();
        this.menu = "\n    ----------* Administrator Menu *----------\n    1. User Manager\n    2. Supply Manager\n    3. Logout\n    ";
    }
    AdminMenu.prototype.adminMenu = function () {
        var logout = new MainMenu_1.MainMenu();
        while (true) {
            console.log(this.menu);
            var choice = +readlineSync.question('Pick your choice: ');
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
    };
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;
