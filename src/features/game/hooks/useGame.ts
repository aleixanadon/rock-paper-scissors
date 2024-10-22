import { useState } from 'react'

const useGame = () => {

  const [playerPoints, setPlayerPoints] = useState<number>(0);
  const [botPoints, setBotPoints] = useState<number>(0);
  const [draws, setDraws] = useState<number>(0);

  const addPlayerPoints = () => { setPlayerPoints(playerPoints+1) };
  const addBotPoints = () => { setBotPoints(botPoints+1) };
  const addDraws = () => { setDraws(draws+1) };

  return {
    playerPoints,
    botPoints,
    draws,
    addPlayerPoints,
    addBotPoints,
    addDraws,
  }
}

export default useGame