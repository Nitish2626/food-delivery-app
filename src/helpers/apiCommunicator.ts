import axios from "axios";

type Params={
    username:string;
    email:string;
    password:string;
    userType:string
};

export const signupUser = async ({username,email,password,userType}:Params) => {
    const res = await axios.post("http://localhost:2000/user/signup", {username,email,password,userType});
    const data=await res.data;
    return data;
};