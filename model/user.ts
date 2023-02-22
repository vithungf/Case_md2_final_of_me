import {iuser} from "./interface/Iuser";

export class User implements iuser{
    id:string;
    name:string;
    password:string;
    role:number;
    isLock : boolean

    constructor(id:string, name:string, password:string, role:number = 1,isLock = false){
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
        this.isLock = isLock;
    }


    getId():string {
        return this.id;
    }
    getName():string {
        return this.name;
    }
    getPassword():string {
        return this.password;
    }

    getRole():number {
        return this.role;
    }
    getIsLock():boolean {
        return this.isLock;
    }
}
