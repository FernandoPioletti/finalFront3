import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"




const Details = () => {

  const [detalles, setDetalles] = useState("")
  const {id} = useParams()
  

  useEffect(()=>{

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => setDetalles(res.data))
    
  },[id])

  return (
    <div className="card-detail">
    <Card sx={{ maxWidth: 250 }}>
      <Link className=  "link" to={`/dentist/${detalles.id}`}>
        <CardActionArea>
          <CardMedia className="imgHome" component="img" height="250" image="/images/doctor.jpg" alt="doctor" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {detalles.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {detalles.username}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {detalles.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {detalles.phone}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      
    </Card>
    </div>
  )
}

export default Details