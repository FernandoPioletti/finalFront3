import { useEffect, useState } from "react";
import Cards from "../component/Cards";


const Fav = () => {
  // Obtener los datos del localStorage
  const [favorites, setFavorites] = useState([])

  useEffect(()=>{
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favorites)

  },[] )

  return (
    <div>
      <h1>Favoritos</h1>
      <ul>
        {favorites.map(({id, name, username}) => (
          <Cards key={id} data = {{ id, name, username}} />
        ))}
      </ul>
    </div>
  );
};

export default Fav;

