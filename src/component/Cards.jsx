import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FavoriteBorder } from '@mui/icons-material';

const Cards = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    const isFavorite = favorites.find((fav) => fav.id === data.id);
  
    if (isFavorite) {
      const updateFavorites = favorites.filter((fav) => fav.id !== data.id);
      localStorage.setItem('favorites', JSON.stringify(updateFavorites));
    } else {
      favorites.push(data);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <Link to={`/dentist/${data.id}`}>
        <CardActionArea>
          <CardMedia component="img" height="250" image="/images/doctor.jpg" alt="doctor" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.username}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <IconButton onClick={handleFavorite}>
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorder color="error" />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;
