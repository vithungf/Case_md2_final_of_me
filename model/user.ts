import {iuser} from "./interface/Iuser";

export class User implements iuser{
    id:string;
    name:string;
    password:string;
    role:number;

    constructor(id:string, name:string, password:string, role:number = 1){
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
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
   
}
