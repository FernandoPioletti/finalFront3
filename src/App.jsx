import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./routes/Home"
import Details from "./routes/Details"
import Contact from "./routes/Contact"
import Fav from "./routes/Fav"
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"




const App = () => {
  return (

    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/dentist/:id" element={<Details />}/>
    <Route path="/contact" element = {<Contact />} />
    <Route path="/favs" element = {<Fav />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
