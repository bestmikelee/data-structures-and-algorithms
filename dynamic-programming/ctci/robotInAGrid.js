function isAllowed(row, col) {
  if (row === 1 && col === 2) {
    return false;
  }
  return true;
}
var path = [];
var endCol = 3;
var endRow = 3;
var solutions = [];
function moveRobot(row, col, currentPath) {
  // paths will be defined as a sequence of coordinates in an array
  var newPath = currentPath.slice(0);
  newPath.push([row, col]);
  if (row < endRow && isAllowed(row + 1, col)) {
    moveRobot(row + 1, col, newPath);
  }
  if (col < endCol && isAllowed(row, col + 1)) {
    moveRobot(row, col + 1, newPath);
  }
  //   if (!isAllowed(row, col)) {
  //     return;
  //   }
  if (row === endRow && col === endCol) {
    solutions.push(newPath);
    return newPath;
  }
}
moveRobot(1, 1, path);
console.log(solutions);
