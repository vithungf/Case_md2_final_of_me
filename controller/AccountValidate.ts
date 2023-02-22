export class IdValidate {
    idValidate: RegExp = /^[a-z0-9_A-Z]{2,}$/

    Validate(id: string): boolean{
        return this.idValidate.test(id)
    }
}
export class PasswordValidate {
    passwordValidate: RegExp = /^(?=.*?[a-zA-Z0-9])(?=.*?[#?!@$%^&*-]).{6,}$/

    Validate(password: string): boolean{
        return this.passwordValidate.test(password)
    }
}