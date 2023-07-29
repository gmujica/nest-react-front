import React, { FC, useEffect, useState } from "react";
import { Container, Button, Box, Grid } from "@mui/material"
import { useNotification } from "../../contex/notification.contex"
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { EventInterface } from "./interface/event.interface";
import { events } from "../../api/events";

export const HomePage: FC<{}> = (Props) => {
  const [allEvents, setAllEvents] = useState<EventInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
//
  const [dummyEvents, setDummyEvents] = useState([
    {
      "event_id": "ae77987d-e6ea-48e7-8e03-bf7c9f0d6684",
      "title": "event11111",
      "descrption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "created_at": "2023-07-27T02:14:25.835Z",
      "updated_at": "2023-07-27T02:14:25.835Z",
      "user": {
        "id": "f3e3d373-f924-4dbe-b19e-ca21a773a2df",
        "name": "bbb",
        "email": "bbb@mail.com",
        "created_at": "2023-07-27T02:14:25.835Z",
        "updated_at": "2023-07-27T02:14:25.835Z"
      }
    },
    {
      "event_id": "ae77987d-e6ea-48e7-8e03-bf7c9f0d6684",
      "title": "event11111",
      "descrption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "created_at": "2023-07-27T02:14:25.835Z",
      "updated_at": "2023-07-27T02:14:25.835Z",
      "user": {
        "id": "f3e3d373-f924-4dbe-b19e-ca21a773a2df",
        "name": "bbb",
        "email": "bbb@mail.com",
        "created_at": "2023-07-27T02:14:25.835Z",
        "updated_at": "2023-07-27T02:14:25.835Z"
    }  },
      {
        "event_id": "ae77987d-e6ea-48e7-8e03-bf7c9f0d6684",
        "title": "event11111",
        "descrption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        "created_at": "2023-07-27T02:14:25.835Z",
        "updated_at": "2023-07-27T02:14:25.835Z",
        "user": {
          "id": "f3e3d373-f924-4dbe-b19e-ca21a773a2df",
          "name": "bbb",
          "email": "bbb@mail.com",
          "created_at": "2023-07-27T02:14:25.835Z",
          "updated_at": "2023-07-27T02:14:25.835Z"
        },  
    },
    {
      "event_id": "ae77987d-e6ea-48e7-8e03-bf7c9f0d6684",
      "title": "event11111",
      "descrption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "created_at": "2023-07-27T02:14:25.835Z",
      "updated_at": "2023-07-27T02:14:25.835Z",
      "user": {
        "id": "f3e3d373-f924-4dbe-b19e-ca21a773a2df",
        "name": "bbb",
        "email": "bbb@mail.com",
        "created_at": "2023-07-27T02:14:25.835Z",
        "updated_at": "2023-07-27T02:14:25.835Z"
      },  
    },
    {
      "event_id": "ae77987d-e6ea-48e7-8e03-bf7c9f0d6684",
      "title": "event11111",
      "descrption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "created_at": "2023-07-27T02:14:25.835Z",
      "updated_at": "2023-07-27T02:14:25.835Z",
      "user": {
        "id": "f3e3d373-f924-4dbe-b19e-ca21a773a2df",
        "name": "bbb",
        "email": "bbb@mail.com",
        "created_at": "2023-07-27T02:14:25.835Z",
        "updated_at": "2023-07-27T02:14:25.835Z"
      },  
    },
    {
      "event_id": "ae77987d-e6ea-48e7-8e03-bf7c9f0d6684",
      "title": "event11111",
      "descrption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "created_at": "2023-07-27T02:14:25.835Z",
      "updated_at": "2023-07-27T02:14:25.835Z",
      "user": {
        "id": "f3e3d373-f924-4dbe-b19e-ca21a773a2df",
        "name": "bbb",
        "email": "bbb@mail.com",
        "created_at": "2023-07-27T02:14:25.835Z",
        "updated_at": "2023-07-27T02:14:25.835Z"
      },  
    },
    {
      "event_id": "ae77987d-e6ea-48e7-8e03-bf7c9f0d6684",
      "title": "event11111",
      "descrption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "created_at": "2023-07-27T02:14:25.835Z",
      "updated_at": "2023-07-27T02:14:25.835Z",
      "user": {
        "id": "f3e3d373-f924-4dbe-b19e-ca21a773a2df",
        "name": "bbb",
        "email": "bbb@mail.com",
        "created_at": "2023-07-27T02:14:25.835Z",
        "updated_at": "2023-07-27T02:14:25.835Z"
      },  
    },
    {
      "event_id": "ae77987d-e6ea-48e7-8e03-bf7c9f0d6684",
      "title": "event11111",
      "descrption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "created_at": "2023-07-27T02:14:25.835Z",
      "updated_at": "2023-07-27T02:14:25.835Z",
      "user": {
        "id": "f3e3d373-f924-4dbe-b19e-ca21a773a2df",
        "name": "bbb",
        "email": "bbb@mail.com",
        "created_at": "2023-07-27T02:14:25.835Z",
        "updated_at": "2023-07-27T02:14:25.835Z"
      },  
    },
  ])
//
  useEffect(() => {
    setLoading(true);
    events.getAll().then((r) => {
    //characters.getAll({page: 1}).then((r) => {
    //characters.getById({id: 1}).then((r) => {
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