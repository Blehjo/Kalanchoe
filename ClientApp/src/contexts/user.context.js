import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const information = async () => {
            await axios.get('/api/users/', {
                mode: 'no-cors'
            })
            .then((response) => setCurrentUser(response.data[0]))
        }

        return information;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
