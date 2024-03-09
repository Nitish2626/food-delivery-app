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
        const res = await axios.post("http://localhost:2000/business/login", { email, password }, { withCredentials: true });
        const data = await res.data;
        return data;
    }
    catch (error) {
        console.log("Business Login API ERROR", error);
        return "Invalid Credentials";
    }
};

export const logoutBusiness = async () => {
    try {
        const res = await axios.get("http://localhost:2000/business/logout", { withCredentials: true });
        console.log("logout ", await res.data, res.status);
        return true;
    }
    catch (error) {
        console.log("Logout API Error", error);
        return false;
    }
};

export const businessAuthStatus = async () => {
    try {
        const res = await axios.get("http://localhost:2000/business/status", { withCredentials: true });
        const data = await res.data;
        console.log("auth ", res.status, data);
        return data;
    }
    catch (error) {
        console.log("Auth Status API ERROR", error);
        return "Unable to authenticate";
    }
};

export const addFood = async (foodName: string, foodImage: string, foodPrice: number, foodDiscount: number) => {
    try {
        const res = await axios.post("http://localhost:2000/business/add", {foodName, foodImage, foodPrice, foodDiscount }, { withCredentials: true });
        const data = await res.data;
        return data;
    }
    catch (error) {
        console.log("Add Food API Error", error);
        return "error";
    }
};

export const getFood = async () => {
    try {
        const res = await axios.get("http://localhost:2000/business/get", { withCredentials: true });
        const data = await res.data;
        console.log("all food", res.status, data);
        return data;
    }
    catch (error) {
        console.log("Find Food API Error", error);
        return false;
    }
};