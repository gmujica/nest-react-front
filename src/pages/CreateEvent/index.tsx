import { Container, Button, Grid, Paper, Box, Typography, TextField, Stack } from "@mui/material"
import { ChangeEvent, FC, FormEvent, useState } from "react"
import { useNotification } from "../../contex/notification.contex";
import { CreateEventValidate } from "../../utils/validateForm";


type RegisterType = {
        title: string,
        description: string
};

export const CreateEventPage: FC<{}> = () => {
    const { getError, getSuccess } = useNotification();
    const [registerData, setregisterData] = useState<RegisterType>({
        title: "",
        description: ""
    });
    const dataRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        setregisterData({ ...registerData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    CreateEventValidate.validate(registerData)
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
                        <Typography sx={{mt:1,mb:1}} variant="h6">Create New Event</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                                <TextField name="title" margin="normal" type="text" fullWidth label="Title" sx={{mt:2,mb:1.5}} onChange={dataRegister} />
                                <TextField name="description" margin="normal" type="text" fullWidth label="Description" sx={{mt:2,mb:1.5}} onChange={dataRegister} />
                            <Button fullWidth type="submit" variant="contained" sx={{mt:1.5,mb:3}}>Create</Button>
                            <Button fullWidth variant="outlined"  href="/">Back</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}