import {ProductManager} from "./controller/productManager";
import {AdminManager} from "./controller/adminManager";
import {MainMenu} from "./view/MainMenu";


let supplyManager = new ProductManager();
let adminManager = new AdminManager();

let login = new MainMenu();
login.mainMenu()
