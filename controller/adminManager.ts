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

    
    

    static checkLogin(id: string, password: string): number {
        const checkID = this.findById(id);
        let notExist = -1
        if (checkID === notExist) { 
            // user with the given id doesn't exist
            return -1;
        }
        const user = AdminManager.UserList[checkID];
        if (user.getPassword() !== password) {
            // password doesn't match
            return -1;
        }
        // user and password are correct, return the user's index
        return checkID;
    }
    

    static checkAdmin(user: User): number {
        if (user.role == 1) {
            return 1
        }
        return 0
    }

    // const user = this("abc123"); // Hàm findUserById() được giả định đã được triển khai
    // user.lock();


  static lockUser(id: string): void {
    const userIndex = this.UserList.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        this.UserList[userIndex].locked = true;
    }
}

static unlockUser(id: string): void {
    const userIndex = this.UserList.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        this.UserList[userIndex].locked = false;
    }
}

}
