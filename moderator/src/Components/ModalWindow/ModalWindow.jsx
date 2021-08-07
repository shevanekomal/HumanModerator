import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './ModalWindow.css'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    // top: `${top}%`,
    // left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position: 'absolute',
    top: '50%',
    left: '50%',
  };
}

const useStyles = makeStyles((theme) => ({
  ModalWindow: {
    position: 'absolute',
    width: 800,
    height:500,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    
  },
}));

export default function ModalWindow({previewData,open,handleClose}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.ModalWindow}>
        <div className='PreviewHeader'><span>Image Details </span><span> <button onClick={()=>handleClose()}>X</button></span></div>
        <img src={previewData.src}/>
        <div className='container'>
          <div>Uploaded Date:{previewData.date}</div>
          <div>Reason : <input name='reason' type='text' /></div>
          
          <div className='buttonContainer'>
          <button>Accept</button>
          <button>Delete</button>
          <button onClick={()=>handleClose()}>Cancel</button>
          </div>
        </div>
      <br />
    
    </div>
      </Modal>
    </div>
  );
}
