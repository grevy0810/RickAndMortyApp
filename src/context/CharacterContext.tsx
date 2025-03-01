import { createContext, useContext, useState, ReactNode } from 'react';

interface CharacterContextType {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
    setTotalPages: (totalPages: number) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
    filterType: string;
    setFilterType: (filter: string) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");
    const [filterType, setFilterType] = useState<string>("name");

    return (
        <CharacterContext.Provider value={{
            page, setPage,
            totalPages, setTotalPages,
            searchValue, setSearchValue,
            filterType, setFilterType
        }}>
            {children}
        </CharacterContext.Provider>
    );
};

export const useCharacterContext = () => {
    const context = useContext(CharacterContext);
    if (!context) throw new Error("useCharacterContext must be used within a CharacterProvider");
    return context;
};
