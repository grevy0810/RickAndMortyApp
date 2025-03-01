import { Character } from "../models/Character"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
interface CharacterCardProps {
    character: Character
    attributes: Array<keyof Character>;
}
const CharacterCard = ({character, attributes}: CharacterCardProps) => {
    return (
        <Card key={character.id} className="shadow-lg hover:scale-105 transition-transform" >
            <Link to={`/character/${character.id}`}>
                <CardMedia component="img" height="250" image={character.image} alt={character.name} />
                <CardContent className="bg-gray-800 text-white">
                    <Typography variant="h6" component="div">
                    {character.name}
                    </Typography>
                    {attributes.map((attr, index) => (
                        <Typography key={index} variant="body2">
                            {attr}: {String(character[attr])}
                        </Typography>
                    ))}
                </CardContent>
            </Link>
        </Card>
    )
}

export default CharacterCard;