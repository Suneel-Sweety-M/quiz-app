import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import play from '../asserts/clock-ticking-53528.mp3';
import correct from '../asserts/correct-6033.mp3';
import wrong from '../asserts/wrong-buzzer-6268.mp3';

const QusAns = ({data, setStop, quest, setQuest}) => {
  const [question,setQuestion] = useState(null);
  const [selectedAns,setSelectedAns] = useState(null);
  const [className,setClassName] = useState("answer");

  const [letsPlay] = useSound(play);
  const [correctAns] = useSound(correct);
  const [wrongAns] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  },[letsPlay]);
  
  useEffect(()=>{
    setQuestion(data[quest - 1]);
  },[data, quest]);

  const delay =(duriation, callback)=>{
    setTimeout(()=>{
      callback();
    },duriation)
  };

  const handleClick =(a)=>{
    setSelectedAns(a);
    setClassName("answer active");
    delay(3000,()=>
      setClassName(a.correct ? 'answer correct' : 'answer wrong')
    );
    delay(5000,()=>
    {
      if(a.correct){
        correctAns();
        delay(1000,()=>{
          setQuest((prv)=> prv + 1);
          setSelectedAns(null);
        })
      }else{
        wrongAns();
        delay(1000,()=>{
          setStop(true);
        })
      }
    });
  };

  return (
    <div className='container'>
        <div className="questions">{question?.question}</div>
        <div className="answers">
            {
              question?.answers.map((a, index)=>(
                <div key={index} className={selectedAns === a ? className : "answer"}
                 onClick={()=>handleClick(a)}>{a.text}</div>
              ))
            }
        </div>
    </div>
  )
}

export default QusAns;