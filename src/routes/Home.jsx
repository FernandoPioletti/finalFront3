import axios  from "axios"
import { useEffect, useState,  } from "react"
import Cards from "../component/Cards"


const Home = () => {

  const [dentist,setDentist]  = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{

      

    axios.get(url).then(res => setDentist(res.data))

  },[]
  )

  console.log(dentist);

  return(
    
  <div className="card-container">
   
  {
    dentist.map( (data) =>{
      return(
        <Cards data ={data} key={data.id} />
        
      )}

    )
      
  }
  </div>
  
  ) 
  
}

export default Home