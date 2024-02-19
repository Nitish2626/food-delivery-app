import axios from "axios";

type Params = {
    username: string;
    email: string;
    password: string;
    userType: string
};

export const signupUser = async ({ username, email, password, userType }: Params) => {
    try {
        const res = await axios.post("http://localhost:2000/user/signup", { username, email, password, userType });
        if (res.status === 401) {
            return "exists";
        }
        else {
            const data = await res.data;
            return data;
        }
    }
    catch (error) {
        console.log("Signup API ERROR", error);
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const res = await axios.post("http://localhost:2000/user/login", { email, password });
        if (res.status === 401 || res.status === 403) {
            return "Invalid Credentials";
        }
        else {
            const data = await res.data;
            return await data;
        }
    } catch (error) {
        console.log("Login API ERROR", error);
    }
};

export const orders=async(name:string,price:number,quantity:number)=>{
    try {
        const res=await axios.post("http://localhost:2000/user/orders",{name,price,quantity});
        const data=await res.data;
        return data;
    } catch (error) {
        console.log("Order Error",error);
    }
};

export const cart=async(name:string,price:number,quantity:number)=>{
    const res= await axios.post("http://localhost:2000/user/cart",{name,price,quantity});
    const data=await res.data;
    console.log(data);
};

export const authStatus = async () => {
    try {
        const res = await axios.get("http://localhost:2000/user/status");
        console.log(await res.data);
        if (res.status === 401) {
            console.log("Unable to authenticate");
        }
        else{
            const data=await res.data;
            return data;
        }
    } 
    catch (error) {
        console.log("Auth Status API ERROR");
    }
};