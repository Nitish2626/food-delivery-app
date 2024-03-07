import axios from "axios"

export const authStatusUserAndBusiness=async(url:string)=>{
    try {
        const res = await axios.get(url,{withCredentials:true});
        const data = await res.data;
        console.log("auth ",res.status,data);
        return data;
    }
    catch (error) {
        console.log("Auth Status API ERROR", error);
        return "Unable to authenticate";
    }
};