import React, { useContext } from "react";
import appContext from "../context/appContext";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Record = () => {

const state = useContext(appContext);
  const name = state.robotName.split("-")[1];
  const currentRecord = state.records[name];
  const currentQuery = state.queries[name];

  return (
    <div className="bg-gray-200 h-4/5 p-2 pl-4">
      <div className="flex h-[60px] items-center text-red-300 text-4xl font-bold pt-10 pb-8 border-1 border-b-2 border-gray-300">
        {state.robotName.split("-")[1]}
      </div>
      <div className="overflow-auto h-5/6">
        {Object.keys(currentRecord).map((record)=>(
        <div key={record} >
          <div className="flex flex-row h-[60px] m-5 justify-end">
              <div className="flex items-center justify-center content-first w-fit mx-4 my-2 px-4 bg-gray-100 rounded-lg">
                {currentQuery[record]}
              </div>
              <div className="flex rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[45px] h-[40px] text-white p-2 items-center justify-center">
                <AccountCircleIcon/>
              </div>
          </div>
          <div className="flex flex-row h-fit m-2 justify-start">
            <div className="flex rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 w-[70px]  h-[60px] text-white p-2 items-center justify-center">
              <SmartToyIcon/>
            </div>
            <div className="flex items-center justify-first content-first mx-4 my-2 p-4 w-full h-fit bg-yellow-100 rounded-lg">
              {currentRecord[record]}
            </div>
          </div>
        </div>))}
      </div>
    </div>
  );
};

export default Record;
