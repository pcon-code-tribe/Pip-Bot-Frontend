import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogPop(props) {
  const [open, setOpen] = React.useState(false);
  const {text, button } = props

  const handleClose = () => {
    setOpen(false);
  }

  const deleteHandler = () =>{
    props.function()
    setOpen(false);
  }
  
  useEffect(() => {
   setOpen(true)
  }, [props.function])

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
        <DialogActions>
          <Button onClick={deleteHandler} color="primary" autoFocus>
           {button}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
