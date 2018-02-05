"use strict";
var count = 0;
var memo = {};
function howMany(size, start, end, numMoves, moveCount) {
  if (!moveCount) {
    moveCount = 0;
  }
  if (numMoves === 0 && destReached(start, end)) {
    count++;
    return 0;
  }
  if (numMoves === 0 && !destReached(start, end)) {
    return -1;
  }
  if (memo[stringifyCoordinates(start)] === numMoves) {
    count++;
    return memo[stringifyCoordinates(start)];
  }
  if (numMoves > 0) {
    const nextMoves = availableMoves(size, start);
    nextMoves.forEach(move => {
      if (
        memo[stringifyCoordinates(move)] !== -1 &&
        !memo[stringifyCoordinates(move)]
      ) {
        memo[stringifyCoordinates(move)] === 0;
      }
      if (memo[stringifyCoordinates(move)] === numMoves) {
        count++;
      } else {
        memo[stringifyCoordinates(move)] =
          memo[stringifyCoordinates(move)] +
          howMany(size, move, end, numMoves - 1, moveCount++);
      }
    });
  }
  return count;
}

function howManyMemoized(size, start, end, numMoves, moveCount) {
  if (!moveCount) {
    moveCount = 0;
  }
  if (numMoves === 0 && destReached(start, end)) {
    return 1;
  }
  if (numMoves === 0 && !destReached(start, end)) {
    return -1;
  }
  if (memo[stringifyCoordinates(start)] === numMoves) {
    return numMoves;
  }
  if (memo[stringifyCoordinates(start)] < 0) {
    return;
  }
  if (numMoves > 0) {
    const nextMoves = availableMoves(size, start);
    for (var i = 0; i < nextMoves.length; i++) {
      var move = nextMoves[i];
      if (!memo[stringifyCoordinates(move)]) {
        memo[stringifyCoordinates(move)] = 0;
      }
      if (memo[stringifyCoordinates(move)] === numMoves) {
        return numMoves;
      } else {
        memo[stringifyCoordinates(move)] =
          memo[stringifyCoordinates(move)] +
          howManyMemoized(size, move, end, numMoves - 1, moveCount++);
      }
    }
  }
  return 0;
}

function availableMoves(size, start) {
  const kingMoveArray = kingMoves(start);
  const knightMoveArray = knightMoves(start);
  const kingKnightMoves = kingMoveArray.concat(knightMoveArray);
  return kingKnightMoves.filter(
    move => move[0] >= 0 && move[0] < size && move[1] >= 0 && move[1] < size
  );
}

function kingMoves(start) {
  const moves = [];
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      if (i !== 0 && j !== 0) {
        moves.push([start[0] + i, start[1] + j]);
      }
    }
  }
  return moves;
}

function knightMoves(start) {
  const moves = [];
  for (var i = -2; i < 3; i++) {
    for (var j = -2; j < 3; j++) {
      if (!(i % 2) && j % 2) {
        moves.push([start[0] + i, start[1] + j]);
      }
      if (!(j % 2) && i % 2) {
        moves.push([start[0] + i, start[1] + j]);
      }
    }
  }
  return moves;
}

function testKingKnightMoves(start) {
  if (!start) {
    start = [0, 0];
  }
  const kingMoveArray = kingMoves(start);
  const knightMoveArray = knightMoves(start);
  console.log(kingMoveArray, knightMoveArray);
}

function destReached(start, end) {
  return start[0] === end[0] && start[1] === end[1];
}

function stringifyCoordinates(start) {
  return start[0] + "_" + start[1];
}

function testCase() {
  var ex1 = howMany(100, [0, 0], [0, 99], 50);
  console.log(memo);
}

testCase();
