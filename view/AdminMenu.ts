var readlineSync = require('readline-sync');
import { MainMenu } from "./MainMenu";
import { AdminMenuUserManager } from "./AdminMenuUserManager";
import {AdminMenuProductManager} from "./AdminMenuProductManager";

export class AdminMenu {

    adminMenuUserManager = new AdminMenuUserManager();
    adminMenuSupplyManager = new AdminMenuProductManager();
    menu = `
    ----------* Administrator Menu *----------
    1. User Manager
    2. Supply Manager
    3. Logout
    `

    adminMenu() {
        let logout = new MainMenu();

        while (true) {
            console.log(this.menu);
            let choice = +readlineSync.question('Pick your choice: ');
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
}