import React, { FC } from "react";
import { Container, Button } from "@mui/material"
import { useNotification } from "../../contex/notification.contex"
import { HeaderComponent } from "../../components";

export const HomePage: FC<{}> = () => {
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