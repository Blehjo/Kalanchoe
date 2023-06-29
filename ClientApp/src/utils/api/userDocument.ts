import axios from "axios";
import { User } from "../../store/user/user.types";

const headers = {
    'Accept': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded ' 
}

export const userDocument = (user: User) => user;

export const login = async (username: string, password: string) => {
    await axios({
        method: 'post',
        url: "https://kalanchoeai-server.azurewebsites.net/api/users/authenticate",
        data: {
            Username: username,
            Password: password
        },
        headers: headers,
        withCredentials: true
    });
}

export const getUser = async () => {
    const user = await axios({
        method: 'get',
        url: `https://kalanchoeai-server.azurewebsites.net/api/users/data`,
        headers: headers,
        withCredentials: true
    });
    return user;
}

export const signUpUser = async (formData: FormData) => {
    await axios({
        method: 'post',
        url: "https://kalanchoeai-server.azurewebsites.net/api/users/register",
        data: formData,
        headers: headers,
        withCredentials: true
    });
}

export const signOutUser = async () => {
    await axios({
        method: 'post',
        url: "https://kalanchoeai-server.azurewebsites.net/api/users/logout",
        headers: headers,
        withCredentials: true
    });
}