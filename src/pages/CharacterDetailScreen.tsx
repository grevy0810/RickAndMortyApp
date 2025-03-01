import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Character } from "../models/Character";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CharacterDetailScreen: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = useState<Character | null>(null);
    const navigate = useNavigate();
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
        <>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate(-1)} // Regresa a la pantalla anterior
                startIcon={<ArrowBackIcon />} 
            >
                Back
            </Button>
        <div className="flex justify-center p-5">
            
            <CharacterCard
                character={character}
                attributes={[
                    { key: "status", label: character.status }, 
                    { key: "species", label: character.species }, 
                    { key: "gender", label: character.gender },
                    { key: "type", label: character.type},
                    { key: "location", label: character.location.name},
                    { key: "origin", label: character.origin.name},
                ]}
                cardStyles="max-w-lg shadow-lg"
                imageSize="450"
            />
        </div>
        </>
    );
  };
  
  export default CharacterDetailScreen;
  