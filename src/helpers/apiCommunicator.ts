import axios from "axios";

type userParams = {
    username: string;
    email: string;
    password: string;
};

type businessParams={
    businessName: string;
    email: string;
    password: string;
};

export const signupUser = async ({ username, email, password}: userParams) => {
    try {
        const res = await axios.post("http://localhost:2000/user/signup", { username, email, password },{withCredentials:true});
        const data = await res.data;
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(" User Signup API ERROR", error);
        return "exists";
    }
};

export const signupBusiness=async({businessName,email,password}:businessParams)=>{
    try {
    const res=await axios.post("http://localhost:2000/business/signup",{businessName,email,password},{withCredentials:true});
        const data=await res.data;
        return data;
    } 
    catch (error) {
        console.log("Business Signup API ERROR",error);
        return "exists";
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const res = await axios.post("http://localhost:2000/user/login", { email, password },{withCredentials:true});
        const data = await res.data;
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("Login API ERROR", error);
        return "Invalid Credentials"
    }
};

export const authStatus = async () => {
    try {
        const res = await axios.get("http://localhost:2000/user/status",{withCredentials:true});
        const data = await res.data;
        return data;
    }
    catch (error) {
        console.log("Auth Status API ERROR", error);
        return "Unable to authenticate";
    }
};

export const orders = async (name: string, price: number, quantity: number) => {
    try {
        const res = await axios.post("http://localhost:2000/user/orders", { name, price, quantity });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log("Order Error", error);
    }
};

export const cart = async (name: string, price: number, quantity: number) => {
    const res = await axios.post("http://localhost:2000/user/cart", { name, price, quantity });
    const data = await res.data;
    console.log(data);
};

