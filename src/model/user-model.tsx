export default class UserModel{
    name: string;
    email: string;
    message: string;

    constructor(){

    }

    toString(): string{
        return JSON.stringify(this);
    }

    toJson(userStringed: string): UserModel{
        return JSON.parse(userStringed) as UserModel;
    }
}