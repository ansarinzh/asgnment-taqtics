import React from 'react';
import { Container, Grid, } from '@mui/material';
import AddNote from '../Component/addNote';
import ListNotes from '../Component/listNotes'

function HomePage(){
    
    return(
    <Container maxWidth={false} style={{marginTop: 15}}>
        <Grid container>
            <Grid item md={5}>
                <AddNote />
            </Grid>
            <Grid item md={5}>
                <ListNotes />
            </Grid>
        </Grid>
    </Container>
    )
}

export default HomePage;