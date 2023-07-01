import { useEffect, useState } from "react";
import Cards from "../component/Cards";
import { Typography } from "@mui/material";


const Fav = () => {
  // Obtener los datos del localStorage
  const [favoritos, setFavoritos] = useState([])

  useEffect(()=>{
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritos)

  },[] )

  return (
    <div>
   <h1>Favoritos</h1>
      <ul>
        {favoritos.map(({id, name, username}) => (
          <Cards key={id} data = {{ id, name, username}} />
        ))}
      </ul>
    </div>
  );
};
export default Fav;

