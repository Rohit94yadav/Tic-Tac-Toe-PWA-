import { types } from "./reducers";

export const setXWin = () => ({
  type: types.SET_X_WIN,
});

export const setOWin = () => ({
  type: types.SET_O_WIN,
});

export const setDraw = () => ({
  type: types.SET_DRAW,
});

export const createNewGame = () => ({
  type: types.CREATE_NEW_GAME,
});

export const resetGameState = () => ({
  type: types.RESET_GAME_STATE,
});

export const setWhoMoveFirst = (isXMoveFirst) => ({
  type: types.SET_WHO_MOVE_FIRST,
  isXMoveFirst: isXMoveFirst,
});

export const makeMove = (squares) => ({
  type: types.MAKE_MOVE,
  squares: squares,
});

export const setGameMode = (isPvp) => ({
  type: types.SET_GAME_MODE,
  isPvp: isPvp,
})

export const setAITurn = (isTurnAI) => ({
  type: types.SET_AI_TURN,
  isTurnAI: isTurnAI,
})
