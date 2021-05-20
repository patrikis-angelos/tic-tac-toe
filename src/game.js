const game = () => {
  const WIN_CASES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const board = Array.apply(null, Array(9)).map(() => '');

  const checkMove = (move) => {
    if (board[move] === '') {
      return true;
    }
    return false;
  }

  const win = () => {
    for (let w = 0; w < WIN_CASES.length; w++) {
      const c = WIN_CASES[w]
      if (board[c[0]] != '' && board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]]) {
        return true;
      }
    }
    return false;
  }

  return { win, checkMove, board }
}

export default game;