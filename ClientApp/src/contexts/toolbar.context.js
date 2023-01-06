import { createContext, useState, useEffect } from 'react';

export const ToolbarContext = createContext({
    setToolbar: () => null,
    toolbar: null,
});

export const ToolbarProvider = ({ children }) => {
    const [toolbar, setToolbar] = useState([]);
    const value = { toolbar, setToolbar };
    return <ToolbarContext.Provider value={value}>{children}</ToolbarContext.Provider>
};