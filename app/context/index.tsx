'use client'

import { useContext, createContext, useState, ReactNode } from "react";

interface SiteContextProps {
    site: string;
    setSite: React.Dispatch<React.SetStateAction<string>>;
}

const SiteContext = createContext<SiteContextProps | undefined>(undefined);

export const useSiteContext = () => {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error('useSiteContext must be used within a SiteProvider');
    }
    return context;
};

interface SiteProviderProps {
    children: ReactNode;
}

export const SiteProvider: React.FC<SiteProviderProps> = ({ children }) => {
    const [site, setSite] = useState<string>('A');

    return (
        <SiteContext.Provider value={{ site, setSite }}>
            {children}
        </SiteContext.Provider>
    );
};
