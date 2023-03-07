import UserModel from "../model/user-model";
import { HttpResponse } from "../types/types";

export async function postUserData(userModel: UserModel): Promise<HttpResponse>{
    
    const data = JSON.stringify(userModel);
    console.log('Dados enviados', data);

    try{
        const response = await fetch('https://1f06-200-151-150-138.sa.ngrok.io/user', {       
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: data
        });

        const result = await response.json();         
        
        if(response.status === 200){
            return {
                message: "Created",
                status: 201,
                data: result
            } as HttpResponse;
        }else{
            return {
                message: "Error",
                status: response.status,
                data: response.statusText
            } as HttpResponse;
        }
    }catch(e){
        throw e;       
    }
    
}