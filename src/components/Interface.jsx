import React from 'react'
import InputBox from './InputBox'
import Record from './Record'
import RobotList from './RobotList'
import SideBar from './SideBar'

const Interface = ({handleChangeRobot, handleFetchData}) => {
  return (
    <div className="flex flex-row h-[90vh] rounded-sm">
        <SideBar/>
        <RobotList handleChangeRobot={handleChangeRobot}/>
        <div className="flex flex-col bg-gray-100 w-full rounded-r-lg">
            <Record/>
            <InputBox handleFetchData={handleFetchData}/>
        </div>
    </div>
  )
}

export default Interface