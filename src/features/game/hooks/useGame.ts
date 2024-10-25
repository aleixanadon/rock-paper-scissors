import { useDispatch } from 'react-redux';
import { decrementScore, incrementScore, setBotResult,  } from '../gameSlice';

const useGame = () => {
  
  const dispatch = useDispatch();

  const incrementScoreBy = (who: 'player' | 'bot' | 'draw') => {
    dispatch(incrementScore({who}))
  }

  const decrementScoreBy = (who: 'player' | 'bot' | 'draw') => {
    dispatch(decrementScore({who}))
  }

  const getBotResult = () => {
    let botResult = Math.floor((Math.random() * 3) + 1);
    dispatch(setBotResult(botResult));
  }

  return {
    incrementScoreBy,
    decrementScoreBy,
    getBotResult,
  }
}

export default useGame