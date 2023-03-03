var readlineSync = require('readline-sync');
import { MainMenu } from "./MainMenu";
import { AdminMenuUserManager } from "./AdminMenuUserManager";
import {AdminMenuProductManager} from "./AdminMenuProductManager";
const chalk = require('chalk')
export class AdminMenu {

    adminMenuUserManager = new AdminMenuUserManager();
    adminMenuSupplyManager = new AdminMenuProductManager();
    menu = `
    ----------* Administrator Menu *----------
    1. User Manager
    2. Product Manager
    3. Logout
    `

    adminMenu() {
        let logout = new MainMenu();
        while (true) {
            console.log(this.menu);
            let choice = +readlineSync.question('Pick your choice: ');

            let inCorrectChoice: any
            let correctChoice: any

            inCorrectChoice = choice <= 0 || choice >= 4
            correctChoice = choice >= 1 || choice <= 3
            
            if(inCorrectChoice){
                console.log(chalk.red('{!!} wrong choice, please try again '))
            }else{

            switch (choice) {
                case 1:
                    this.adminMenuUserManager.adminMenuManager();
                    break;
                case 2:
                    this.adminMenuSupplyManager.AdminMenuProductManager();
                    break;
                case 3:
                    return logout.mainMenu;
                    console.log(chalk.green('-=* logout successfully *=-'));
            }
        }
        }
    }
}