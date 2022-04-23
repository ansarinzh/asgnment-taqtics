import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton, TextField} from '@mui/material';
import AddNote from './addNote'

function EditModal(props){
  console.log("props id", props?.val?._id)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return(
        <>
    <IconButton edge="end" aria-label="comments" onClick={handleClickOpen}>
                    <EditIcon />
        </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Note"}
        </DialogTitle>
        <DialogContent>
        <AddNote data = {props.val} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
}

export default EditModal;