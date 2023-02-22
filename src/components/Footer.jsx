import React from "react";
import Button from '@mui/material/Button';

const Footer = ({num, setText, setNum}) => {

  const click = () => {
    setText([])
    setNum(0)
  }


    return(
        <>
        <div className="footer">
        <p> You have pending <strong> {num} </strong>tasks </p>
        <Button id="button" title="Remove all" variant="contained" color="success" onClick={click}>Clear All</Button>
            </div>
        </>
    )
}

export default Footer;