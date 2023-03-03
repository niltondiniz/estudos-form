import UserModel from "../model/user-model";

export interface Props{

}

export interface ControllerState{
    userModel: UserModel
}

export interface ViewState{
    name: string;
    email: string;
    message: string;
    handleChange: any; 
    handleSubmit: any;
}

export interface ViewProps{
    name: string;
    email: string;
    message: string;
    handleChange: any; 
    handleSubmit: any;
}

export interface HttpResponse{
    message: string;
    status: number;
    data: any
}