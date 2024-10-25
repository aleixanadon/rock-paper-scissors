import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface GameState {
    playerScore: number;
    botScore: number;
    numOfDraw: number;
    hasWon: boolean;
    botHand: number | null;
}

const initialState: GameState = {
    playerScore: 0,
    botScore: 0,
    numOfDraw: 0,
    hasWon: false,
    botHand: null
}

export interface WhichPoints {
    who: 'player' | 'bot' | 'draw';
}

export type BotHand = {
    bothand: number | null;
}

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    incrementScore: (state, action: PayloadAction<WhichPoints>) => {
      const whichPoints = action.payload.who;
      switch (whichPoints) {
        case 'player':
            state.playerScore += 1
            break;
        case 'bot':
            state.botScore += 1
            break;
        case 'draw':
            state.numOfDraw += 1
            break;
        default:
            break;
      }
    },
    decrementScore: (state, action: PayloadAction<WhichPoints>) => {
        const whichPoints = action.payload.who;
        switch (whichPoints) {
            case 'player':
                state.playerScore -= 1
                break;
            case 'bot':
                state.botScore -= 1
                break;
            case 'draw':
                state.numOfDraw -= 1
                break;
            default:
                break;
        }
    },
    setBotResult: (state, action: PayloadAction<number>) => {
        state.botHand = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementScore, decrementScore, setBotResult } = gameSlice.actions

export default gameSlice.reducer