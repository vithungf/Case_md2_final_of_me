import {AdminMenu} from "./AdminMenu";

var readlineSync = require('readline-sync');

import {AdminManager} from "../controller/adminManager";
import {User} from "../model/user"
import {IdValidate, PasswordValidate} from "../controller/AccountValidate";


export class AdminMenuUserManager {
    menu: string = `
    ----------*User Manager*----------
    1. show list user
    2.Add user 
    3.edit user
    4.remove user
    5.back`;


    adminMenuManager() {
        let back = new AdminMenu();
        console.log(this.menu)
        let choice = +readlineSync.question('Pick your choice: ');
        let inputId = '';
        let inputName = '';
        let inputPassword = '';
        let isIdExist = 0;
        let no = -1;
        let idValidate = new IdValidate();
        let passwordValidate = new PasswordValidate();
        let isLoopPassword = true

        switch (choice) {
            case 1:
                console.table(AdminManager.UserList)
                this.adminMenuManager()
                break;
            case 2:
                let isLoopId = true;
                while (isLoopId) {
                    console.log('id need at least 2 word, please try again')
                    inputId = readlineSync.question('id:')
                    let isIdvalidate = AdminManager.findById(inputId);
                    if (!idValidate.Validate(inputId)) {
                        console.log('{!!}wrong type of id,please try again')
                        continue;
                    } else if (isIdvalidate != -1) {
                        console.log('{!!}this ID is validate.please try again')
                        continue;
                    } else {
                        isLoopId = false;
                    }
                }
                while (isLoopPassword) {
                    console.log('password need at least 6 word and special characters')
                    inputPassword = readlineSync.question('password:')
                    if (passwordValidate.Validate(inputPassword)) {
                        let inputName = readlineSync.question('NAME:')
                        let newUser = new User(inputId, inputName, inputPassword)
                        AdminManager.addUser(newUser);
                        console.log('-=* add new user success *=-')
                        this.adminMenuManager()
                        break;
                    } else {
                        console.log('wrong password,please try again')
                        continue;
                    }
                }
                break;
            case 3:
                inputId = readlineSync.question('ID:')
                isIdExist = AdminManager.findById(inputId)

                if (isIdExist == no) {
                    console.log('{!!}this id unavailable,please try again')
                    this.adminMenuManager()
                    break;
                } else {
                    while (isLoopPassword) {
                        console.log('password need at least 6 word and special characters');
                        inputPassword = readlineSync.question('password:')
                        if (passwordValidate.Validate(inputPassword)) {
                            isLoopPassword = false;
                            break;
                        } else {
                            console.log('{!!}wrong password,please try again')
                        }
                    }
                    inputName = readlineSync.question('name:')
                    let updateUser = new User(inputId, inputName, inputPassword)
                    AdminManager.editUser(inputId, updateUser)
                    console.log('-=* edit user successfully *=-')
                    this.adminMenuManager()
                    break
                }
            case 4:
                inputId = readlineSync.question('id:')
                isIdExist = AdminManager.findById(inputId)

                if (isIdExist == no) {
                    console.log('{!!}this is id not exist,please try again')
                    this.adminMenuManager()
                    break;
                }else{
                    AdminManager.deleteUser(inputId)
                    console.log('-=* delete user successfully *=-')
                    this.adminMenuManager()
                    break;
                }
            case 5:
                return back.adminMenu
        }
    }
}