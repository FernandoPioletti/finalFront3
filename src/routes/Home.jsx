import axios  from "axios"
import { useEffect, useState,  } from "react"
import Cards from "../component/Cards"


const Home = () => {

  const [dentista,setDentista]  = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{

    axios.get(url).then(res => setDentista(res.data))

  },[]
  )
  return(
  <div className="card-container">
  {
    dentista.map( (data) =>{
      return(
        <Cards data ={data} key={data.id} />
      )}
    )
  }
  </div>
  ) 
}

export default Home