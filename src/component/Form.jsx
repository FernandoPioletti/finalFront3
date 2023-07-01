import { Button, Grid, TextField, Typography } from "@mui/material";
import { ErrorMessage, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup"


const Form = () => {

  const [mensaje, setMensaje] = useState(false)

  const sendForm = (data, { resetForm }) => {
    console.log(data);
    setMensaje(true);
    localStorage.setItem('userName', data.name);
    localStorage.setItem('email', data.email);
    resetForm();
  }

const { handleChange , handleSubmit, errors, values} = useFormik({

  initialValues: {
    name: "",
    email: "",
      },
  onSubmit: sendForm,
  validationSchema: Yup.object({
    name: Yup.string().required("El nombre es obligatorio").min(5,"Debe contar con al menos 5 caracteres") ,
    email: Yup.string().email("Ingresá un mail válido").required("el mail es obligatorio"),
  }),
  
  
 
  
})



  return (
    <div className="form-container">
     
      <h1>Contacto</h1>
      <form action="" onSubmit={handleSubmit}>
        <Grid 
          padding={5}
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={3}
          sx={{ width: "100%" }}
        >
          <Grid  item xs={12} md={6}>
            <TextField
              type="text"
              id="outlined-basic"
              label="name"
              variant="outlined"
              fullWidth
              name="name"
              onChange={handleChange}
              value={values.name}
           helperText={errors.name}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              type="email "
              id="outlined-basic"
              label="email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
              helperText={errors.email}
              
             
            />
          </Grid>
        </Grid>
        
        <Button className="button" type="submit" variant="contained">
          Enviar
        </Button>
     
      </form>

      {mensaje && <p>¡Muchas gracias {localStorage.getItem('userName')}, nos contactaremos al mail {localStorage.getItem('email')}!</p>}
    </div>
  );
};

export default Form;