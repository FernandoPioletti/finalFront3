
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Typography } from "@mui/material";
import Home from "../routes/Home";

const NavBar = () => {
 const {obj} = useContext(ContextGlobal)
  return (
    <nav className="navbar-container">
        
        <div className="logo">
        <img src="/images/DH.ico"></img>
        </div>  
        <div className="navbar-link">
         <Link className="link" to = "/home"> <h2 className="link">Home</h2> </Link>
         <Link className="link" to = "/contact"> <h2 className="link">Contacto</h2> </Link>
         <Link className="link" to = "/favs"> <h2 className="link">Favoritos</h2> </Link>
        <button className= "btnToggle" onClick = {obj.handleToggle}>{obj.theme === "light"?<p>Modo oscuro</p>:<p>Modo Claro</p>}</button>
        </div>
    </nav>
  )
}
export default NavBar