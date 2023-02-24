import {User} from "../model/user";

export class AdminManager {
    role: number = 1;

    static UserList: User[] = [];

    constructor() {
        AdminManager.UserList.push(new User('hung', 'Hung', '123', 0));
        AdminManager.UserList.push(new User('hung2', 'Hung2', '123', 1));
        AdminManager.UserList.push(new User('hung13', 'Hung3', '123', 1));
        AdminManager.UserList.push(new User('hung12', 'Hung4', '123', 1));
        AdminManager.UserList.push(new User('lekhuyen1508', 'lệ khuyên', '123', 1));

        // role = 0 => admin
        // role = 1 => user


    }

    static showListUser(): User[] {
        return AdminManager.UserList
    }

    static addUser(newUser: User): void {
        AdminManager.UserList.push(newUser)
    }

    static findById(id: string) :any {
        for (let i in AdminManager.UserList) {
            if (id == AdminManager.UserList[i].getId()) {
                return +i
            }
        }
        return -1
     
        
    }

    static deleteUser(id: string) {
        let index = this.findById(id)
        let notExist = -1
        if (index !== notExist) {
            AdminManager.UserList.splice(index, 1)
        } else {
            return
        }
    }

    static editUser(id: string, updateUser: User): void {
        let index = this.findById(id);
        let notExist = -1
        if (index !== notExist) {
            AdminManager.UserList[index] = updateUser;
        }
    }

    // static IsLock(id: string, isLock: boolean): void {
    //     let index = this.findById(id);
    //     if (index !== -1) { // Kiểm tra xem tài khoản có tồn tại trong danh sách hay không
    //         let user = AdminManager.UserList[index];
    //         if (isLock) {
    //             user.isLock = true; // Khóa tài khoản
    //         } else {
    //             AdminManager.UserList[index] = undefined; // Xóa tài khoản khỏi danh sách
    //         }
    //     }
    // }

    static checkLogin(id: string, password: string): any {
    
        let checkID = this.findById(id);      
        let notExist = -1
        if (checkID !== notExist) {
            for (let i in AdminManager.UserList[checkID]) {
                if (password == AdminManager.UserList[checkID].getPassword()) {
                    return +i
                }
            }
            return -1
        }
    }

    static checkAdmin(user: User): number {
        if (user.role == 1) {
            return 1
        }
        return 0
    }

}

