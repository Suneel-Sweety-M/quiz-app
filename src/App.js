import "./App.css";
import React, { useEffect, useState } from "react";
import money from "./money";
import QusAns from "./components/QusAns";
import data from "./components/data";
import Timer from "./components/Timer";
import Start from "./components/start";

function App() {
  const [user, setUser] = useState(null);
  const [quest, setQuest] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    quest > 1 && setEarned(money.find((m) => m.id === quest - 1).amount);
  }, [money, quest]);
  return (
    <div className="app">
      {user ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned : {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} quest={quest} />
                  </div>
                </div>
                <div className="bottom">
                  <QusAns
                    data={data}
                    setQuest={setQuest}
                    quest={quest}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {money.map((m) => (
                <li
                  key={m.id}
                  className={
                    quest === m.id ? "moneyListItem active" : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUser={setUser} />
      )}
    </div>
  );
}

export default App;
