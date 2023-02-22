import {User} from "../model/user";

var readlineSync = require('readline-sync');
import {AdminManager} from "../controller/adminManager";
import {AdminMenu} from "./AdminMenu";
import {UserMenu} from "./UserMenu";
import {Register} from "./register";

export class MainMenu {

    menu =
        `-------* welcome to supermarket of me *--------
 1.login
 2.register
 3.exit`
    mainMenu = () => {
        let isLoop = true
        let inputID = ''
        let inputPassword = ''
        let choice = 0
        while (isLoop) {
            console.log(this.menu)
            choice = +readlineSync.question('enter your choice:')

            switch (choice) {
                case 1:
                    let adminMenu = new AdminMenu;
                    let userMenu = new UserMenu;
                    let isLoop1 = true;
                    while (isLoop1) {
                        inputID = readlineSync.question('User Name(ID):')
                        inputPassword = readlineSync.question('password:')
                        let checkLogin = AdminManager.checkLogin(inputID, inputPassword)
                        let idUnavailable = -1
                        if (checkLogin == idUnavailable) {
                            console.log('{!!}this id is unavailable,please try again')
                        } else {
                            console.log('-=*login success*= -')
                            isLoop1 = false
                        }
                    }
                    let indexOfID = AdminManager.findById(inputID)
                    let user1 = 1
                    let checkRole = AdminManager.UserList[indexOfID].getRole();
                    if (checkRole == user1) {
                        userMenu.userMenu()
                    } else {
                        adminMenu.adminMenu()
                    }
                    break;
                case 2:
                    let register = new Register
                    let newUser = register.register()
                    AdminManager.addUser(newUser)
                    break;
                case 3:
                    return false;
            }
        }
    }

}