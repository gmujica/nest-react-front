import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { fetchEventDetails } from "../../api/dataFetcher";
import { EventInterface } from "../home/interface/event.interface";
import { log } from "console";

const CardDetailsPage: React.FC = () => {
  const { event_id } = useParams<{ event_id?: string }>(); 
  const [eventDetails, setEventDetails] = useState<EventInterface | null>(null);

  useEffect(() => {
    if (event_id) {
      fetchEventDetails(event_id)
        .then((response) => {
          const data: EventInterface = {
            ...response.data,
            created_at: new Date(response.data.created_at),
            updated_at: new Date(response.data.updated_at),
          };
          setEventDetails(data);
          console.log(eventDetails);
          
        })
        .catch((error) => {
          console.error("Error fetching event details:", error);
        });
    }
  }, [event_id]);

  return (
    <Container sx={{ mt: 15 }} maxWidth="xl">
      <div>
      <Grid 
          container
          direction="column"
          alignItems="center" 
          justifyContent="top"
          sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          {eventDetails ? ( 
          <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
            <Typography variant="h4">Event Details</Typography>
            <Typography variant="h6">Title: {eventDetails.title}</Typography>
            <Typography>Description: {eventDetails.description}</Typography>
            <Typography>Created At: {eventDetails.created_at.toString()}</Typography>
            <Typography>Updated At: {eventDetails.updated_at.toString()}</Typography>
          </Paper>
          ) : (
          <div>Loading...</div>
          )}
            <Button fullWidth variant="outlined"  href="/">Back</Button>
        </Grid>     
      </Grid>
      </div>
    </Container>
  );
};

export default CardDetailsPage;
