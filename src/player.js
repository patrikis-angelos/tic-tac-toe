const player = (name, symbol) => {
  const getInfo = () => {return { name, symbol }}

  const makeMove = (move, board) => {
    board[move] = symbol;
  }

  return { getInfo, makeMove }
}

export default player;