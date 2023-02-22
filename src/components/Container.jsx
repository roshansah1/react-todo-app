import React, { useState } from "react";
import './style.css'
import Header from "./Header";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";

const Container = () => {

    const [input, setInput] = useState("");
    const [text, setText] = useState([]);
    const [num, setNum] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [val, setVal] = useState(null);
  
    return(
        <>
            <div className="container">
                <Header />
                <Input input={input} setInput={setInput} text={text} setText={setText} toggle={toggle} setToggle={setToggle} val={val} />
                <List setInput={setInput} text={text} setText={setText} setNum={setNum} setToggle={setToggle} setVal={setVal} />
                <Footer num={num} setNum={setNum} setText={setText} />
            </div>
        </>
    )
}

export default Container;