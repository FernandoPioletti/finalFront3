import { Button, Grid, TextField, Typography } from "@mui/material";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup"


const Form = () => {


const { handleChange , handleSubmit, errors, values} = useFormik({

  initialValues: {
    nombre: "",
    email: "",
      },
  validationSchema: Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio").min(5,"El minimo debe ser 5 caracteres") ,
    email: Yup.string().email("Ingrese un email valido").required("El email es obligatorio"),
  }),
  
  onSubmit: (data) => {
   console.log("paso");
   console.log(data);

  },
 
  
})



  return (
    <div>
     

      <Typography color="primary" variant="h4" align="center">
        Consultas
      </Typography>
      <form action="" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={3}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={6}>
            <TextField
              type="text"
              id="outlined-basic"
              label="name"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              value={values.nombre}
           helperText={errors.nombre}
          
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

        <Button type="submit" variant="contained">
          Enviar
        </Button>
     
      </form>
    </div>
  );
};

export default Form;