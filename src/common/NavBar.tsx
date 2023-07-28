import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Grid, Stack } from '@mui/material';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
            <Container maxWidth='xl'>
                <Grid 
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography>NestJS + React App</Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined">Login</Button>
                            <Button variant="contained">Register</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}