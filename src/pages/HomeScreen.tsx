// src/screens/HomeScreen.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';

const HomeScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const fetchCharacters = async (page) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
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
        {/* {characters.map((character) => (
          <div key={character.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Link to={`/character/${character.id}`}>
              <img className="w-full rounded-lg mb-3" src={character.image} alt={character.name} />
              <h3 className="text-xl font-semibold">{character.name}</h3>
              <p className="text-sm">Status: {character.status}</p>
              <p className="text-sm">Species: {character.species}</p>
              <p className="text-sm">Gender: {character.gender}</p>
            </Link>
          </div>
        ))} */}
      </div>
      <div className="flex justify-center mt-5">
        {/* <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
        /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
