import React from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Input = ({input, setInput, text ,setText , toggle, val, setToggle}) => {
  
    const change = (e) => {
        setInput(e.target.value) 
    }

    const click = () => {
        
        if(input === ""){
            alert("add task")
        }else if(input && !toggle){
              setText(
                text.map((ele) => {
                    if(ele.id === val){
                        return {...ele, input: input}
                    }
                    return ele
                })
              )
              setToggle(true)
              setInput("")
          }else{
                setText([...text, {input: input, id: Date.now()}])
                setInput("")
          }
    }

  const add = (e) => {
    if(e.code === "Enter"){
        click()
    }
  }

 
     
    return(
        <>
           <div className="input-button">
           <input type="text" value={input}  onChange={change} onKeyPress={add} placeholder="Add your new todo" />
            {toggle == true ? <Button id="button" variant="contained" color="success" onClick={() => click()}><AddIcon className="icon" /></Button> : 
            <Button id="button" variant="contained" color="success" onClick={() => click()}><ModeEditIcon className="icon" /></Button>}
           </div>
        </>
    )
}

export default Input;