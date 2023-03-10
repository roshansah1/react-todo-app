import React, { useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const List = ({setInput, setText, setNum , setToggle, text, setVal}) => {

    const del = (id) => {
       let newList = text.filter((ele) => {
          return  id !== ele.id 
        })
      setNum(0)
      setText(newList)
    }

    const edit = (id) => {
       text.forEach((ele) => {
        if(ele.id === id){
          setInput(ele.input)
          setToggle(false)
          setVal(id)
        }
       })
    }
  
   
    return(
        <>
         <div className="list">
         {text.map((ele, indx) => {
          setNum(text.length)
          return <div className="list_box" key={indx}> 
          <p> {ele.input} </p>
          <div className="buttons">
          <Button id="button" title="Edit task" variant="contained" color="success" onClick={() => edit(ele.id)}><ModeEditIcon /></Button>
          <Button id="button" title="Delete task" variant="contained" color="error"  onClick={() => del(ele.id) }><DeleteIcon /></Button>
          </div>
          </div>
         })}
         </div>
        </>
    )
}

export default List;