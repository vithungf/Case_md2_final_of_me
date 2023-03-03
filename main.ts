import {ProductManager} from "./controller/productManager";
import {AdminManager} from "./controller/adminManager";
import {MainMenu} from "./view/MainMenu";
import { AdminMenuProductManager } from "./view/AdminMenuProductManager";


let productManager = new ProductManager();

let adminManager = new AdminManager();

let login = new MainMenu();
login.mainMenu()

// let adminMenuSupplyManager = new AdminMenuProductManager()
// adminMenuSupplyManager.AdminMenuProductManager()