import axios from "axios";

export const RealAsync = async() =>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    }catch(err){
        return err;
    }
}
