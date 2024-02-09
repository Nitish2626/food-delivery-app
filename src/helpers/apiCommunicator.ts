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
        console.log("ERROR",error);
    }
};