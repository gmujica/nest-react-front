import React, { FC } from "react";
import { Container, Button } from "@mui/material"
import { useNotification } from "../../contex/notification.contex"

export const HomePage: FC<{}> = () => {
    const { getError } = useNotification();

    const handleClick = () => {
        getError("hola mundo")
    }
    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button fullWidth variant="contained" onClick={handleClick}>
          Estamos en home
        </Button>
      </Container>
    )
}