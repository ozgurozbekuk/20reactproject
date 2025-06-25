import React, { useEffect, useState } from "react";
import "./tictactoe.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

const Tictactoe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('');

  const handleClick = (getCurrentSquare) => {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(copySquares);
  };

  function getWinner(squares) {
    const winningPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0;i < winningPatterns.length;i++) {
        const [x,y,z] = winningPatterns[i]
        if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
       
            return squares[x]
        }
    }
    return null
  }

  function restartClick(){
    setXIsNext(true)
    setSquares(Array(9).fill(''))
  }

  useEffect(() => {

    if(!getWinner(squares) && squares.every(item => item !== '')){
        setStatus('This is a draw ! Please restart!')
    }else if(getWinner(squares)){
        setStatus(`Winner is ${getWinner(squares)}`)
    }else{
        setStatus(`Next player is ${xIsNext ? 'X' : 'O'}`)
    }

  },[squares,xIsNext])

  return (
    <div className="tictactoe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h2>{status}</h2>
      <button onClick={restartClick}>Restart</button>
    </div>
  );
};

export default Tictactoe;
