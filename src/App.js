
import React, { useReducer } from "react";
import { reducer, initState } from "./reducer/reducer";
import appContext from "./context/appContext";

import Interface from "./components/Interface";
import Loading from "./components/Loading";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  function handleChangeRobot(name){
    dispatch({ type: "SWITCH", payload: name});
  }
  function handleFetchData(url, data){
    dispatch({type:"LOADING"});
    fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
    })
    .catch(()=> Promise.reject({ error : 'networkError' }))
    .then((res)=> res.json())
    .then((res)=> {
        const newMsg = res.choices[0].text;
        const model = res.model.split(":")[0].split("-")[1];
        const time = res.created;
        const query = data.prompt;
        dispatch({ type: "ASK", payload: {model, newMsg, time, query}})
        dispatch({ type: "SUBMIT", payload: {model, newMsg, time, query}})
        dispatch({ type:"UNLOADING"});
    });
}
  return (
    <appContext.Provider value={state}>
      <div className="App w-full min-h-screen py-20 px-40 bg-[url('https://picsum.photos/1600/900')]">
        {state.isLoading &&<Loading/>}
        <Interface handleChangeRobot={handleChangeRobot} handleFetchData={handleFetchData}/>
      </div>
    </appContext.Provider>
  );

}

export default App;
