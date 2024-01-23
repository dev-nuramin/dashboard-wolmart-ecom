
import React, { useState } from 'react'

const Clock = () => {

    let time = new Date().toLocaleTimeString()
    
    const [ctime, setCTime] = useState(time)
    
    const UpdateTime = () => {
         time = new Date().toLocaleTimeString()
         setCTime(time)
         if(ctime > 'AM'){
            return "Good  Afternoon"
         }else{
            return "Good Morning!"
         }
    }
    
    setInterval(UpdateTime, 1000)
  return (
    <div>{ctime}</div>
  )
}

export default Clock