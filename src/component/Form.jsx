import { Button, Grid, TextField, Typography } from "@mui/material";
import { ErrorMessage, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup"


const Form = () => {

  const [mensaje2, setMensaje2] = useState(false)

  const sendForm = (data, { resetForm }) => {
    console.log(data);
    setMensaje2(true);
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
    name: Yup.string().required("name is required").min(5,"character min is 5") ,
    email: Yup.string().email("enter a valid email").required("email is required"),
  }),
  
  
 
  
})



  return (
    <div className="form-container">
     

      <Typography color="primary" variant="h4" align="center">
        Contact
      </Typography>
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
        
    
         {errors.name}

        <Button className="button" type="submit" variant="contained">
          Send
        </Button>
     
      </form>

      {mensaje2 && <p>¡Thank you so much {localStorage.getItem('userName')}, we will contact you at the following email {localStorage.getItem('email')}!</p>}
    </div>
  );
};

export default Form;