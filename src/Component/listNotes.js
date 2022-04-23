import React from 'react';
import { 
    Card, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    Typography
} from '@mui/material';
import EditModal from './modal';
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotes } from '../Action/action';


function ListNotes(){
    const dispatch = useDispatch();
    const list = useSelector(state => state.NoteReducer);
    React.useEffect(()=> {
        dispatch(getAllNotes());
    }, [dispatch]);
    return(
        <>
            
        
            <Card sx={{ maxWidth: 350 }}>
                {list && list.data ? list.data.map((val)=> {
                    return(
                        <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        aria-label="contacts">
                            <ListItem disablePadding 
                            secondaryAction={ <EditModal val={val} /> }>
                            <ListItemButton>
                                <ListItemText primary={val.title} 
                                secondary={
                                    <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary">
                                    </Typography>
                                    {val.note} {' - '}
                                    {val.date}
                                    </>
                                } />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    )
                }): "NO Record Found" 
                }
                
            </Card>
        
        </>
    )
}

export default ListNotes;