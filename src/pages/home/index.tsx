import React, { FC, useEffect, useState } from "react";
import { Container, Button, Box, Grid } from "@mui/material"
import { useNotification } from "../../contex/notification.contex"
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { EventInterface } from "./interface/event.interface";
import { events } from "../../api/events";
import { dymmyData } from "./dummyData";

export const HomePage: FC<{}> = (Props) => {
  const [allEvents, setAllEvents] = useState<EventInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
//
  const [dummyEvents, setDummyEvents] = useState(dymmyData)
//
  useEffect(() => {
    setLoading(true);
    events.getAll().then((r) => {
      console.log('Home log', allEvents);
      setAllEvents(r.data.results)
    }).catch((e) => {
      console.error(e);
    })
  }, []);
    return (
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <HeaderComponent 
          title="Event manager" 
          description="NestJS + React App"
          element={
            <Button fullWidth variant="contained">
              event manager
            </Button>
          }
        />
        <div>
          {dummyEvents!.length !== 0 ? (
            <Grid container sx={{my: 2}} spacing={2} direction="row">
            
              {dummyEvents.map((e) => {
                return (
                  <Grid item xs={3}>
                    <CardComponent
                      //image={} 
                      title={e.title} 
                      descrption={e.descrption}
                      created_at={e.created_at}
                      updated_at={e.updated_at}
                      
                    />
                  </Grid>
                )
              })}
            
          </Grid>
          ): ("No Data")}
        </div>
      </Container>
    )
}