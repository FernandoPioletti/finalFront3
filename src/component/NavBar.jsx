
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"


const NavBar = () => {

 const {obj} = useContext(ContextGlobal)
 
 
  return (
    <div className="navBar">
      <ul>
        <li> 
          <Link to = "/home"> <h2>Home</h2> </Link>
        </li>
        <li> 
          <Link to = "/contact"> <h2>Contact</h2> </Link>
        </li>
        <li> 
          <Link to = "/favs"> <h2>Fav</h2> </Link>
        </li>
        
        <button onClick = {obj.toggle}>Tema</button>
        {}
      </ul>
      


    </div>
  )
}

export default NavBar