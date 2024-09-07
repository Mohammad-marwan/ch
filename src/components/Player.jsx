import { useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick(e) {
    e.preventDefault();
   setPlayer({...player,score:player.score+1 }) ;
    console.log(player.score+1);
  }

  const handelChange = (e)=>{
   
   const {name,value}=e.target
    setPlayer({...player,[name]:value})
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName} name='firstName'
          onChange={handelChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName} name='lastName'
          onChange={handelChange}
        />
      </label>
    </>
  );
  }