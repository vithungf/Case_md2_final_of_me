"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, password, role) {
        if (role === void 0) { role = 1; }
        this.locked = false;
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.lock = function () {
        this.locked = true;
    };
    User.prototype.unlock = function () {
        this.locked = false;
    };
    return User;
}());
exports.User = User;
