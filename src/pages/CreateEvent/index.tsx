import { Container, Button, Grid, Paper, Box, Typography, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNotification } from "../../contex/notification.contex";
import { CreateEventValidate } from "../../utils/validateForm";
import { createEvent, fetchEventDetails } from "../../api/dataFetcher";
import { v4 as uuidv4 } from "uuid";
import { log } from "console";


type RegisterType = {
  title: string;
  description: string;
  event_id: string;
};

export const CreateEventPage: FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  const [registerData, setregisterData] = useState<RegisterType>({
    title: "",
    description: "",
    event_id: ""
  });

  const dataRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setregisterData({ ...registerData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
  e.preventDefault();
  try {
    await CreateEventValidate.validate(registerData);
    const newEventId = uuidv4();

    const response = await createEvent({
      title: registerData.title,
      description: registerData.description,
      event_id: newEventId, 
      created_at: new Date(),
      updated_at: new Date(),
      user: "92357ae3-3a81-44d0-9433-9c37c138e864",// user id (need create a user first)
    });

  } catch (error) {
    console.log(e);
    //getError(error.message);
  }
};
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h6">
              Create New Event
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField name="title" margin="normal" type="text" fullWidth label="Title" sx={{ mt: 2, mb: 1.5 }} onChange={dataRegister} />
              <TextField
                name="description"
                margin="normal"
                type="text"
                fullWidth
                label="description"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={dataRegister}
              />
              <Button fullWidth type="submit" variant="contained" sx={{ mt: 1.5, mb: 3 }}>
                Create
              </Button>
              <Button fullWidth variant="outlined" href="/">
                Back
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
