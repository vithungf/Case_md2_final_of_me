"use strict";
exports.__esModule = true;
exports.PasswordValidate = exports.IdValidate = void 0;
var IdValidate = /** @class */ (function () {
    function IdValidate() {
        this.idValidate = /^[a-z0-9_A-Z]{2,}$/;
    }
    IdValidate.prototype.Validate = function (id) {
        return this.idValidate.test(id);
    };
    return IdValidate;
}());
exports.IdValidate = IdValidate;
var PasswordValidate = /** @class */ (function () {
    function PasswordValidate() {
        this.passwordValidate = /^(?=.*?[a-zA-Z0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    }
    PasswordValidate.prototype.Validate = function (password) {
        return this.passwordValidate.test(password);
    };
    return PasswordValidate;
}());
exports.PasswordValidate = PasswordValidate;
