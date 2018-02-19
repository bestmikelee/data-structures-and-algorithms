/**
 * win condition: 4 pieces in a row that match (diag, col, row)
 * board is 6 rows by 7 columns
 * evaluate whether a board has a winning state
 * evaluate if next move will lead to a win
 * evaluate if there is a move that can lead to a win
 *
 */
const memo = {};
const board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 2, 2, 0, 0],
  [0, 1, 2, 1, 2, 2, 0],
  [1, 2, 2, 1, 1, 2, 0]
];
var winState;
function evalBoardState() {
  // for (var i = 0; i < board.length; i++) {
  //     for (var j = 0; j < board[i].length; j++) {
  //         var gamePiece = board[i][j];

  //     }
  // }
  traceNumConnected([0, 0], null, 0);
  console.log(winState);
  return winState;
}

function traceNumConnected(currentCoord, lastCoord, numConnected) {
  var validMoves;
  //   if (numConnected > 1) {
  //     console.log("here", numConnected, currentCoord, lastCoord);
  //   }

  if (numConnected === 4) {
    winState = true;
    try {
      console.log(
        currentCoord,
        board[currentCoord[0]][currentCoord[1]],
        lastCoord
      );
    } catch (e) {
      console.log(currentCoord);
    }

    return numConnected;
  }
  validMoves = getAllValidDirections(currentCoord, numConnected);
  console.log(currentCoord, validMoves);
  for (var i = 0; i < validMoves.length; i++) {
    var nextCoord = validMoves[i];

    if (
      board[currentCoord[0]][currentCoord[1]] &&
      board[nextCoord[0]][nextCoord[1]] ===
        board[currentCoord[0]][currentCoord[1]]
    ) {
      var connected = numConnected + 1;
      traceNumConnected(nextCoord, currentCoord, connected);
    } else {
      traceNumConnected(nextCoord, currentCoord, 0);
    }
  }
}

function getAllValidDirections(currentCoord, numConnected) {
  var allMoves = [[0, 1], [1, -1], [1, 0], [1, 1]];
  var validMoves = [];
  allMoves.forEach(coord => {
    var nextRow = coord[0] + currentCoord[0];
    var nextCol = coord[1] + currentCoord[1];
    // console.log(currentCoord, nextRow, nextCol);
    if (
      nextRow + 3 - numConnected < 6 &&
      nextCol + 3 - numConnected < 7 &&
      nextRow > -1 &&
      nextCol > -1
    ) {
      validMoves.push([nextRow, nextCol]);
    }
  });
  return validMoves;
}

evalBoardState();
