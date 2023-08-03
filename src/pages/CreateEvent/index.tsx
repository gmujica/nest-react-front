import { Container, Button, Grid, Paper, Box, Typography, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNotification } from "../../contex/notification.contex";
import { CreateEventValidate } from "../../utils/validateForm";
import { createEvent, fetchEventDetails } from "../../api/dataFetcher";
import { v4 as uuidv4 } from "uuid";


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

    // Generate a new UUID for the event_id property
    const newEventId = uuidv4();

    // Create a new event using the data from the form
    const response = await createEvent({
      title: registerData.title,
      description: registerData.description,
      event_id: newEventId, // Use the generated UUID for event_id
      created_at: new Date(),
      updated_at: new Date(),
      user: "e6053a7c-ade4-49a0-9d57-4071932ac916",// this is the user fron database
    });

    // ... (rest of the code)
  } catch (error) {
    // ... (error handling code)
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
