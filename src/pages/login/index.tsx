import { Container, Button, Grid, Paper, Box, Typography, TextField, Stack } from "@mui/material"
import { ChangeEvent, FC, FormEvent, useState } from "react"
import { useNotification } from "../../contex/notification.contex";
import { LoginValidate } from "../../utils/validateForm";


type LoginType = {
        username: string,
        password: string
};

export const LoginPage: FC<{}> = () => {
    const { getError, getSuccess } = useNotification();
    const [loginData, setLoginData] = useState<LoginType>({
        username: "",
        password: ""
    });
    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData)
      .then(() => {
        getSuccess(JSON.stringify(loginData));
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
                        <Typography sx={{mt:1,mb:1}} variant="h6">LogIn</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                                <TextField name="username" margin="normal" type="text" fullWidth label="Email" sx={{mt:2,mb:1.5}} onChange={dataLogin} />
                                <TextField name="password" margin="normal" type="password" fullWidth label="Password" sx={{mt:1.5,mb:1.5}} onChange={dataLogin} />
                            <Button fullWidth type="submit" variant="contained" sx={{mt:1.5,mb:3}}>logIn</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}