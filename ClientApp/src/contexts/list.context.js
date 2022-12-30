import { createContext, useState } from 'react';

export const ListContext = createContext({
    isNavOpen: false,
    setIsNavOpen: () => {

    }
});

export const ListProvider = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const value = { isNavOpen, setIsNavOpen };
    return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}