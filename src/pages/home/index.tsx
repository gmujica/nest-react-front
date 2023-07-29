import React, { FC, useEffect, useState } from "react";
import { Container, Button, Box, Grid } from "@mui/material"
import { useNotification } from "../../contex/notification.contex"
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { EventInterface } from "./interface/event.interface";

export const HomePage: FC<{}> = () => {
  const [allEvents, setAllEvents] = useState<EventInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    characters.getAll({page: 1}).then((r) => {
    //characters.getById({id: 1}).then((r) => {
      setAllEvents(r.data.results)
    }).catch((e) => {
      console.error(e);
    })
  }, []);
    return (
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <HeaderComponent 
          title="hola mundo" 
          description="hola mundo description lorem improvisado"
          element={
            <Button fullWidth variant="contained">
              Home Page
            </Button>
          }
        />
        {/**
         * <div>
          <>
          {
            allEvents!.length !== 0 ? (
              <Grid container sx={{my: 2}} spacing={2} direction="row">
                {allEvents!.map((event) => (
                  <Grid item xs={3}>
                    <CardComponent 
                      key={event.id} 
                      image={event.image} 
                      name={event.name} 
                      status={event.status} 
                      species={event.species}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : ("No Data")
          }
          </>
        </div>
         */}
        
      </Container>
    )
}