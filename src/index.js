import player from './player';
import './style.css';
import game from './game';

const board = document.querySelectorAll(".row div");
const reset_button = document.querySelector("button");
let g = game();
const player1 = player('Player1', 'X');
const player2 = player('Player2', 'O');
let current_player = player1;
let winner = false;
let count = 0;

const reset = () => {
  for (let i = 0; i < board.length; i++) {
    board[i].textContent = '';
  }
  g = game();
  winner = false;
  count += 1;
  console.log(count);
}

const handleClick = (e) => {
  if (winner) return;

  const { symbol } = current_player.getInfo();
  const cell = e.target;
  const move = cell.id;
  if (!g.checkMove(move)) return;

  current_player.makeMove(move, g.board);
  cell.textContent = symbol;
  if (g.win()) winner = current_player;
  current_player = current_player === player1 ? player2 : player1;
}

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener('click', handleClick.bind(this))
}

reset_button.addEventListener('click', reset);
