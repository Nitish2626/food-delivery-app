import axios from "axios";

type businessParams = {
    businessName: string;
    email: string;
    password: string;
};

export const signupBusiness = async ({ businessName, email, password }: businessParams) => {
    try {
        const res = await axios.post("http://localhost:2000/business/signup", { businessName, email, password }, { withCredentials: true });
        const data = await res.data;
        return data;
    }
    catch (error) {
        console.log("Business Signup API ERROR", error);
        return "exists";
    }
};

export const loginBusiness = async (email: string, password: string) => {
    try {
        const res=await axios.post("http://localhost:2000/business/login",{email,password},{withCredentials:true});
        const data=await res.data;
        return data;
    } 
    catch (error) {
        console.log("Business Login API ERROR",error);
        return "Invalid Credentials";
    }
};