
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
         
        <Link className= "link" to= "/home">
        <div className="logo">
        <img src="/images/DH.ico"></img>
        <Typography style={{ fontSize: '2rem' }}>DENT</Typography>
        </div>
        </Link>
       
        <div className="navbar-link">
         <Link className="link" to = "/home"> <h2 className="link">Home</h2> </Link>
         <Link className="link" to = "/contact"> <h2 className="link">Contact</h2> </Link>
         <Link className="link" to = "/favs"> <h2 className="link">Fav</h2> </Link>
        <button className= "btnToggle" onClick = {obj.toggle}>{obj.theme === "light"?<ModeNightIcon color="warning"/> : <LightModeIcon/>}</button>
        </div>
    </nav>
  )
}

export default NavBar