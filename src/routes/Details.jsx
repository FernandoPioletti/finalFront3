import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




const Details = () => {

  const [detail, setDetail] = useState("")
  const {id} = useParams()
  

  useEffect(()=>{

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => setDetail(res.data))



  },[id])

  return (
    
    <h1>{detail.name}</h1>

  )
}

export default Details