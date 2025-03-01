import { useEffect, useState } from 'react';
import axios from 'axios';

import Pagination from '@mui/material/Pagination';

import { Character } from '../models/Character';
import CharacterCard from '../components/CharacterCard';
import CharacterFilter from '../components/CharacterFilter';
import { toast } from 'react-toastify';
import { useCharacterContext } from '../context/CharacterContext';

const filterOptions = ["name", "status", "species", "type", "gender"];

const HomeScreen = () => {
    const {
        page, setPage,
        totalPages, setTotalPages,
        searchValue, setSearchValue,
        filterType, setFilterType
    } = useCharacterContext();
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetchCharacters(page, searchValue, filterType);
    }, []);

    const fetchCharacters = async (page: number, value?: string, filter?: string) => {
        setPage(page);
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}&${filter}=${value}`);
            console.log('response', response.data)
            setCharacters(response.data.results);
            setTotalPages(response.data.info.pages);
        } catch (error) {
            console.error('Error fetching characters:', error);
            toast.info("No characters found with the selected filters.");
            setCharacters([]);
            setTotalPages(1);
        }
    };

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-5">Rick and Morty Characters</h1>
            <CharacterFilter 
                filterType={filterType}
                setFilterType={setFilterType}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                filterOptions={filterOptions}
                fetchCharacters={fetchCharacters}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
                {characters.map((character, index) => (
                    <CharacterCard 
                        character={character} 
                        key={index}
                        attributes={[
                            { key: "status", label: character.status }, 
                            { key: "species", label: character.species }, 
                            { key: "gender", label: character.gender }
                        ]}
                        cardStyles='shadow-lg hover:scale-105 transition-transform '
                        imageSize='250'
                    />
                ))}
            </div>
            <div className="flex justify-center m-5 pb-5">
                <Pagination
                count={totalPages}
                page={page}
                size="large" 
                onChange={(event, value) => fetchCharacters(value, searchValue, filterType)}
                color="primary"
                />
            </div>
        </div>
    );
};

export default HomeScreen;
