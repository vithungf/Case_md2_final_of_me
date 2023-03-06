import { IdValidate, PasswordValidate } from "../Controller/AccountValidate";
import { AdminManager } from "../Controller/AdminManager";
import { MainMenu } from "./MainMenu";
import {User} from "../model/user";
const chalk = require("chalk");

var readlineSync = require('readline-sync');

export class Register {
    idValidate = new IdValidate();
    passwordValidate = new PasswordValidate();
    back = new MainMenu()


    register(): User | any {
        let inputId = '';
        let isLoop = true;
        let newUser: User;
        while (isLoop) {
            console.log(chalk.blue('[i] ID need at least 2 words, not include symbol'));
            inputId = readlineSync.question('Id: ');
            if (this.idValidate.Validate(inputId)) {
                let yes = -1;
                let isIdAvailable = AdminManager.findById(inputId);
                if (isIdAvailable == yes) {
                    isLoop = false;
                } else {
                    console.log(chalk.red('{!!} This ID is unavailable. Please try again'));
                    continue;
                }
            } else {
                console.log(chalk.red('{!!} Wrong type of ID. Please try again'));
                continue;
            }
        }

        let isLoop2 = true;
        while (isLoop2) {
            console.log(chalk.blue('[i] Password need at lease 6 words, include alphabet and at least 1 symbol [#?!@$%^&*-]'));
            let inputPassword = readlineSync.question('Password: ');
            if (this.passwordValidate.Validate(inputPassword)) {
                let inputName = readlineSync.question('Name: ');
                newUser = new User(inputId, inputName, inputPassword);
                console.log(chalk.green('register successful'))
                return newUser;

            } else {
                console.log(chalk.red('{!!} Wrong type of password. Please try again'));
                continue;
            }
        }

    }
}