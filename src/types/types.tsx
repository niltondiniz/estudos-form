export interface Props{

}

export interface ControllerState{
    name: string,
    email: string,
    message: string,
    formSent: boolean
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
    formSent: boolean;
}

export interface HttpResponse{
    message: string;
    status: number;
    data: any
}