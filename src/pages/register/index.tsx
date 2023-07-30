import { Container, Button, Grid, Paper, Box, Typography, TextField, Stack } from "@mui/material"
import { ChangeEvent, FC, FormEvent, useState } from "react"
import { useNotification } from "../../contex/notification.contex";
import { LoginValidate } from "../../utils/validateForm";


type RegisterType = {
        username: string,
        password: string
};

export const RegisterPage: FC<{}> = () => {
    const { getError, getSuccess } = useNotification();
    const [registerData, setregisterData] = useState<RegisterType>({
        username: "",
        password: ""
    });
    const dataRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        setregisterData({ ...registerData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(registerData)
      .then(() => {
        getSuccess(JSON.stringify(registerData));
      })
      .catch((error) => {
        getError(error.message);
      });
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
                    <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
                        <Typography sx={{mt:1,mb:1}} variant="h6">Register</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                                <TextField name="username" margin="normal" type="text" fullWidth label="Email" sx={{mt:2,mb:1.5}} onChange={dataRegister} />
                                <TextField name="password" margin="normal" type="password" fullWidth label="Password" sx={{mt:1.5,mb:1.5}} onChange={dataRegister} />
                                <TextField name="rpassword" margin="normal" type="password" fullWidth label="Repeat Password" sx={{mt:1.5,mb:1.5}} />
                            <Button fullWidth type="submit" variant="contained" sx={{mt:1.5,mb:3}}>Register</Button>
                            <Button fullWidth variant="outlined"  href="/">Back</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}