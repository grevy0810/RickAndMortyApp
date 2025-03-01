import { useEffect, useState } from 'react';
import axios from 'axios';

import Pagination from '@mui/material/Pagination';

import { Character } from '../models/Character';
import CharacterCard from '../components/CharacterCard';

const HomeScreen = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        fetchCharacters(page);
    }, [page]);

    const fetchCharacters = async (page: number) => {
        try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        console.log('response', response.data)
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    return (
        <div className="text-center p-5">
            <h1 className="text-3xl font-bold mb-5">Rick and Morty Characters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
                {characters.map((character, index) => (
                    <CharacterCard 
                        character={character} 
                        key={index}
                        attributes={["status", "species", "gender"]}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-5">
                <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="primary"
                />
            </div>
        </div>
    );
};

export default HomeScreen;
