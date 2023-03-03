import {AdminMenu} from "./AdminMenu";

var readlineSync = require('readline-sync');

import {AdminManager} from "../controller/adminManager";
import {User} from "../model/user"
import {IdValidate, PasswordValidate} from "../controller/AccountValidate";
const chalk = require('chalk')


export class AdminMenuUserManager {
    menu: string = `
    ----------*User Manager*----------
    1.Show list user
    2.Add user 
    3.edit user
    4.remove user
    5.locked
    6.unlocked
    7.exit`;


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
        let inCorrectChoice: any 
        let correctChoice : any

        inCorrectChoice = choice <= 0 || choice >=8
        correctChoice = choice >=1 || choice <=7
        if (inCorrectChoice){
            console.log(chalk.red('{!!}wrong choice, please try again'))
        }else if(correctChoice){
        switch (choice) {
            case 1:
                console.table(AdminManager.UserList)
                this.adminMenuManager()
                break;
            case 2:
                let isLoopId = true;
                while (isLoopId) {
                    console.log(chalk.blue('id need at least 2 word, please try again'))
                    inputId = readlineSync.question('id:')
                    let isIdvalidate = AdminManager.findById(inputId);
                    if (!idValidate.Validate(inputId)) {
                        console.log(chalk.red('{!!}wrong type of id,please try again'))
                        continue;
                    } else if (isIdvalidate != -1) {
                        console.log(chalk.red('{!!}this ID is validate.please try again'))
                        continue;
                    } else {
                        isLoopId = false;
                    }
                }
                while (isLoopPassword) {
                    console.log(chalk.blue('password need at least 6 word and special characters'))
                    inputPassword = readlineSync.question('password:')
                    if (passwordValidate.Validate(inputPassword)) {
                        let inputName = readlineSync.question('NAME:')
                        let newUser = new User(inputId, inputName, inputPassword)
                        AdminManager.addUser(newUser);
                        console.log(chalk.green('-=* add new user success *=-'))
                        this.adminMenuManager()
                        break;
                    } else {
                        console.log(chalk.red('wrong password,please try again'))
                        continue;
                    }
                }
                break;
            case 3:
                inputId = readlineSync.question('ID:')
                isIdExist = AdminManager.findById(inputId)

                if (isIdExist == no) {
                    console.log(chalk.red('{!!}this id unavailable,please try again'))
                    this.adminMenuManager()
                    break;
                } else {
                    while (isLoopPassword) {
                        console.log(chalk.blue('password need at least 6 word and special characters'));
                        inputPassword = readlineSync.question('new password:')
                        if (passwordValidate.Validate(inputPassword)) {
                            isLoopPassword = false;
                            break;
                        } else {
                            console.log(chalk.red('{!!}wrong password,please try again'))
                        }
                    }
                    inputName = readlineSync.question(' new name:')
                    let updateUser = new User(inputId, inputName, inputPassword)
                    AdminManager.editUser(inputId, updateUser)
                    console.log(chalk.green('-=* edit user successfully *=-'))
                    this.adminMenuManager()
                    break
                }
            case 4:
                inputId = readlineSync.question('id:')
                isIdExist = AdminManager.findById(inputId)

                if (isIdExist == no) {
                    console.log(chalk.red('{!!}this is id not exist,please try again'))
                    this.adminMenuManager()
                    break;
                }else{
                    AdminManager.deleteUser(inputId)
                    console.log(chalk.green('-=* delete user successfully *=-'))
                    this.adminMenuManager()
                    break;
                }


        
                case 5:
                inputId = readlineSync.question('Input user ID to lock: ');
                 isIdExist = AdminManager.findById(inputId);
                    if (isIdExist == no) {
                         console.log(chalk.red('{!!}This ID does not exist. Please try again.'));
                        this.adminMenuManager();
                        break;
                    } else {
                     AdminManager.lockUser(inputId);
                         console.log(chalk.green('-=* User locked successfully *=-'));
                         this.adminMenuManager();
                         break;
                            }
                 case 6:
                                inputId = readlineSync.question('ID:');
                                isIdExist = AdminManager.findById(inputId);
                            
                                if (isIdExist == no) {
                                    console.log(chalk.red('{!!}this id not exist, please try again'));
                                    this.adminMenuManager();
                                    break;
                                } else {
                                    AdminManager.unlockUser(inputId);
                                    console.log(chalk.green('-=* unlocked user successfully *=-'));
                                    this.adminMenuManager();
                                    break;
                                }
                                        

                

            case 7:
                 return back.adminMenu
                 console.log(chalk.green('-=* exit successfully*=-'))
        }
    }
}
}  