import axios from "axios";

export const userDocument = (user) => {
    console.log(user);
    return user;
}

export const login = async (username, password) => {
    await axios({
        method: 'post',
        url: "https://localhost:7028/api/users/authenticate",
        data: {
            Username: username,
            Password: password
        },
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
    .then((response) => {
        console.log(response);
        return response.data;
    });
}

export const getUser = async () => {
    const user = await axios({
        method: 'get',
        url: `https://localhost:7028/api/users/data`,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });
    return user;
}

export const signUpUser = async (username, email, password, profileImage, dateOfBirth, firstName, lastName) => {
    await axios({
        method: 'post',
        url: "https://localhost:7028/api/users/register",
        data: {
            Username: username,
            EmailAddress: email,
            Password: password,
            ProfileImage: profileImage,
            DateOfBirth: dateOfBirth,
            FirstName: firstName,
            LastName: lastName
        },
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
    .then((response) => {
        return response.data;
    });
}

export const signOutUser = async () => {
    await axios({
        method: 'post',
        url: "https://localhost:7028/api/users/logout",
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
    .then((response) => {
        return response.data;
    });
}