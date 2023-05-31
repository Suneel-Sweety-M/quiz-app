import React, { useEffect, useState } from 'react'

const Timer = ({setStop, quest}) => {
    const [timer,setTimer] = useState(30);

    useEffect(()=>{
        if(timer === 0) return setStop(true);

        const interval = setInterval(()=>{
            setTimer(prv => prv - 1);
        },1000);
        
        return ()=> clearInterval(interval);
    },[setStop, timer]);

    useEffect(()=>{
        setTimer(30);
    },[quest]);

  return timer;
}

export default Timer;