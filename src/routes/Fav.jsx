import { useEffect, useState } from "react";
import Cards from "../component/Cards";
import { Typography } from "@mui/material";


const Fav = () => {
  // Obtener los datos del localStorage
  const [favorites, setFavorites] = useState([])

  useEffect(()=>{
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favorites)

  },[] )

  return (
    <div>
      <Typography color="primary" variant="h4" align="center">
        Favorites
      </Typography>
      <ul>
        {favorites.map(({id, name, username}) => (
          <Cards key={id} data = {{ id, name, username}} />
        ))}
      </ul>
    </div>
  );
};

export default Fav;

