import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../models/Character";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


const CharacterDetailScreen: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = useState<Character | null>(null);
  
    useEffect(() => {
      fetchCharacter();
    }, []);
  
    const fetchCharacter = async () => {
      try {
        const response = await axios.get<Character>(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };
  
    if (!character) {
      return <div className="text-center p-5 text-xl">Loading...</div>;
    }
  
    return (
      <div className="flex justify-center p-5">
        <Card className="max-w-lg shadow-lg">
          <CardMedia component="img" height="400" image={character.image} alt={character.name} />
          <CardContent className="bg-gray-800 text-white text-center">
            <Typography variant="h4">{character.name}</Typography>
            <Typography>Status: {character.status}</Typography>
            <Typography>Species: {character.species}</Typography>
            <Typography>Gender: {character.gender}</Typography>
            <Typography>Origin: {character.origin.name}</Typography>
            <Typography>Location: {character.location.name}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default CharacterDetailScreen;
  