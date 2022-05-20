import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AndroidIcon from "@mui/icons-material/Android";
import appContext from "../context/appContext";

const RobotList = ({ handleChangeRobot }) => {
  const state = useContext(appContext);
  const robotModels = state.robotModel;

    const showTheLastMsg =(name)=>{
        const currentRecord = state.records[name];
        const keys = Object.keys(currentRecord);
        const lastRecord = keys[keys.length - 1];
        const lastRecordMsg = currentRecord[lastRecord];
        const showLastRecordMsg = lastRecordMsg.length>35? lastRecordMsg.slice(0,35)+"...": lastRecordMsg;
        return showLastRecordMsg;
    }
  return (
    <div className="bg-white w-6/12 p-2 border-r-2 border-r-gray-100">
      <div className="flex bg-gray-200 rounded-lg mx-2 my-3 h-[40px] p-2 text-sm text-slate-700">
        <SearchIcon />
        &nbsp;Search
      </div>
      {Object.keys(robotModels).map((model) => (
        <div
          key={model}
          onClick={() => handleChangeRobot(robotModels[model])}
          className={`flex flex-row mt-2 rounded-sm py-2 ${robotModels[model] === state.robotName? `bg-blue-300 text-black`: `text-gray-400 hover:bg-gray-100`}
          hover:cursor-pointer hover:text-pink-400`}
        >
          <div className={`flex ${robotModels[model] === state.robotName? `bg-gradient-to-r from-pink-500 to-yellow-500`: `bg-gradient-to-t from-blue-500 to-gray-500`}
           rounded-full w-[50px] h-[50px] text-white justify-center items-center mx-3`}>
            {robotModels[model] === state.robotName ? (
              <SmartToyIcon />
            ) : (
              <AndroidIcon />
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex font-bold">{model}</div>
            <div className="flex truncate">{showTheLastMsg(model)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RobotList;
