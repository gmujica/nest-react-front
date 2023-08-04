import { Container, Button, Grid, Paper, Box, Typography, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNotification } from "../../contex/notification.contex";
import { LoginValidate, RegisterUserValidate } from "../../utils/validateForm";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { log } from "console";

type RegisterType = {
  name: string;
  email: string;
  password: string;
};

export const RegisterPage: FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  const [registerData, setRegisterData] = useState<RegisterType>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const dataRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  

  const createUser = async (newUserData: RegisterType) => {
    try {
      const response: AxiosResponse<RegisterType> = await axios.post(
        "http://localhost:3000/users", // Update the URL to use port 3000
        newUserData
        );
      return response.data; // Return the response data after successful creation
    } catch (error) {
      throw new Error("Error creating user");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate the form data
      await RegisterUserValidate.validate(registerData);

      // Create the new user
      const newUser = await createUser(registerData);
        console.log(newUser);
    
      getSuccess("User created successfully!");
      navigate("/"); 
    } catch (error: any) {
      getError(error.message);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Grid 
        container
        direction="column"
        alignItems="center" 
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h6">Register</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField name="name" margin="normal" type="text" fullWidth label="Name" sx={{ mt: 2, mb: 1.5 }} onChange={dataRegister} />
              <TextField name="email" margin="normal" type="text" fullWidth label="Email" sx={{ mt: 2, mb: 1.5 }} onChange={dataRegister} />
              <TextField name="password" margin="normal" type="password" fullWidth label="Password" sx={{ mt: 1.5, mb: 1.5 }} onChange={dataRegister} />
              <Button fullWidth type="submit" variant="contained" sx={{ mt: 1.5, mb: 3 }}>
                Register
              </Button>
              <Button fullWidth variant="outlined" href="/">
                Back
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
};
