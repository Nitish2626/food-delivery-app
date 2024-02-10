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
        console.log("ERROR", error);
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
            return data;
        }
    } catch (error) {
        console.log("ERROR", error);
    }
};

export const authStatus = async () => {
    const res = await axios.get("http://localhost:2000/user/status");
    console.log(res);
    if (res.status === undefined) {
        return "Unable to authenticate";
    }
    else{
        const data=await res.data;
        return data;
    }
};