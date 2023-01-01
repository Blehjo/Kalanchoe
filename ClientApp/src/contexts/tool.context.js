import { createContext, useState } from 'react';

export const ToolContext = createContext({
    isNavOpen: false,
    setIsNavOpen: () => {

    }
});

export const ToolProvider = ({ children }) => {
    const [isToolOpen, setIsToolOpen] = useState(false);
    const value = { isToolOpen, setIsToolOpen };
    return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>
}
