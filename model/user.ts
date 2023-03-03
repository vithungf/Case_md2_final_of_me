import {iuser} from "./interface/Iuser";
import { product } from "./product";

export class User implements iuser{
    id:string;
    name:string;
    password:string;
    role:number;
    boughtCart: Array<Array<product>>
    public locked:boolean = false;

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
    public lock():any { // phương thức khóa
        this.locked = true;
      }
    
      public unlock(): any { // phương thức mở khóa
        this.locked = false;
      }
    
}
