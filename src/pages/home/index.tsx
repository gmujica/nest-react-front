import React, { FC, useEffect, useState } from "react";
import { Container, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { CardComponent, HeaderComponent } from "../../components";
import { EventInterface } from "./interface/event.interface";
import { fetchData } from "../../api/dataFetcher";

export const HomePage: FC<{}> = (Props) => {
  const [allEvents, setAllEvents] = useState<EventInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
      .then((response) => {
        console.log("Fetched Data:", response.data);
        // Sort the events by created_at in descending order (most recent first)
        const sortedEvents = response.data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setAllEvents(sortedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false);
      });
  }, []);
  

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Event manager"
        description="NestJS + React App"
        element={
          <Link to={'/create'} style={{ textDecoration: "none" }}>
            <Button fullWidth variant="contained">
              Create New Event
            </Button>
          </Link>
          
        }
      />
      <Box my={2}>
        {loading ? (
          <div>Loading...</div>
        ) : allEvents === null ? (
          <div>No Data</div>
        ) : allEvents.length !== 0 ? (
          <Grid container spacing={2}>
            {allEvents.map((e) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={e.event_id}>
                <Link to={`/card/${e.event_id}`} style={{ textDecoration: "none" }}>
                  <CardComponent
                    //image={}
                    title={e.title}
                    description={e.description}
                    created_at={e.created_at.toString()}
                    updated_at={e.updated_at.toString()} 
                    event_id={e.event_id}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        ) : (
          <div>No Data</div>
        )}
      </Box>
    </Container>
  );
};