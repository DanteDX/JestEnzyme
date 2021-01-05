import {RealAsync} from "./RealAsync";

export const Async = async() =>{
    try{
        const response = await RealAsync();
        return response;
    }catch(err){
        return err;
    }
}


