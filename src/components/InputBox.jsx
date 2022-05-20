import React, { useContext, useState } from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import appContext from "../context/appContext";
const InputBox = ({handleFetchData}) => {
    const [input, setInput] = useState("Write a poem about a dog wearing skis");

    const state = useContext(appContext);
    let url = `https://api.openai.com/v1/engines/${state.robotName}/completions`
    
    const data = {
        prompt: input,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };
    
    function handleClick(){
        handleFetchData(url, data);
        setInput("");
    }
  return (
    <div className="w-full bg-zinc-600 h-1/5 flex justify-end content-end">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-4 justify-start items-start align-top resize-none"
        name="Text1"
        cols="5"
        rows="4"
        placeholder="Text here"
      />
      <button className="bg-blue-300 flex justify-center w-[50px] items-center hover:text-white hover:bg-blue-400"
      onClick={handleClick}><KeyboardReturnIcon/></button>
    </div>
  );
};

export default InputBox;
