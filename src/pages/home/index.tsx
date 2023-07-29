import React, { FC, useEffect } from "react";
import { Container, Button } from "@mui/material"
import { useNotification } from "../../contex/notification.contex"
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: FC<{}> = () => {
  useEffect(() => {
    //characters.getAll({}).then((r) => {
    characters.getById({id: 1}).then((r) => {
      console.log(r.data);
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
      </Container>
    )
}