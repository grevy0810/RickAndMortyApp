import { Character } from "../models/Character"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
interface CharacterCardProps {
    character: Character
    attributes: { key: keyof Character; label: string }[];
    cardStyles: string;
    imageSize: string;
}
const CharacterCard = ({character, attributes, cardStyles, imageSize}: CharacterCardProps) => {
    return (
        <Card key={character.id} className={`${cardStyles} !bg-gray-800`} >
            <Link to={`/character/${character.id}`}>
                <CardMedia component="img" height={`${imageSize}`} image={character.image} alt={character.name} />
                <CardContent className=" text-white">
                    <Typography variant="h6" component="div">
                    {character.name}
                    </Typography>
                    {attributes.map(({ key, label }) => (
                        <Typography key={key} variant="body2">
                            {key}: {label}
                        </Typography>
                    ))}
                </CardContent>
            </Link>
        </Card>
    )
}

export default CharacterCard;