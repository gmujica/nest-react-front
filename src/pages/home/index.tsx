import React, { FC } from "react";
import { Container, Button } from "@mui/material"
import { useNotification } from "../../contex/notification.contex"

export const HomePage: FC<{}> = () => {
    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button fullWidth variant="contained">
          Estamos en home
        </Button>
      </Container>
    )
}