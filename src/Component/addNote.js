import React from 'react';
import { Card, Button, TextField, } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDispatch, useSelector } from 'react-redux'
import { addNote, editNote } from '../Action/action';

function AddNote(props) {
    console.log("params", props)
    const [date, setDate] = React.useState(props?.data?.date ? props?.data?.date : ''); 
    const [title, setTitle] = React.useState(props?.data?.title ? props?.data?.title : '');
    const [notes, setNotes] = React.useState(props?.data?.note ? props?.data?.note : '');
    const allData = {
        title: title,
        note: notes,
        date: date
    };
    allData._id = props?.data?._id;
    const dispatch = useDispatch();
    const dataTes = useSelector(state => state.NoteReducer);
    //  console.log("dataTes", dataTes);
//    console.log("data", allData);
    return(
        <>
        <Card sx={{ maxWidth: 350 }}>
            <div>
            <TextField
            id="outlined-basic" 
            label="Title" 
            value={title}
            margin="normal"
            onChange={(e)=>setTitle(e.target.value)}
            variant="outlined" />
            <TextField 
            id="outlined-basic" 
            label="Note" 
            margin="normal"
            value={notes}
            onChange={(e)=>setNotes(e.target.value)}
            variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                    }}
                renderInput={(params) => <TextField {...params} margin="normal" variant="outlined" />}
                />
            </LocalizationProvider>
            </div>
          { console.log() }
            <Button variant="contained" 
            onClick={(props?.data?._id) ? ()=>dispatch(editNote(allData)) : 
                ()=> dispatch(addNote(allData))}
            >{(props?.data?._id) ? " Edit Note" : "Add Note"}</Button>
                    
        </Card>
        </>
    )
    
}
export default AddNote;