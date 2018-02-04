"use strict";

function getOrdering(height, bloom, wilt) {
  var stepCount = 0;
  for (var i = 0; i < height.length; i++) {
    console.log(i, stepCount, height);
    if (height[i + 1]) {
      if (
        height[i] > height[i + 1] &&
        doesOverlap(bloom[i], bloom[i + 1], wilt[i], wilt[i + 1])
      ) {
        // swap
        var temp = height[i];
        var tempB = bloom[i];
        var tempW = wilt[i];

        bloom[i] = bloom[i + 1];
        bloom[i + 1] = tempB;

        wilt[i] = wilt[i + 1];
        wilt[i + 1] = tempW;
        height[i] = height[i + 1];
        height[i + 1] = temp;
        stepCount++;
      }

      if (
        height[i] < height[i + 1] &&
        !doesOverlap(bloom[i], bloom[i + 1], wilt[i], wilt[i + 1])
      ) {
        var temp = height[i];
        var tempB = bloom[i];
        var tempW = wilt[i];

        bloom[i] = bloom[i + 1];
        bloom[i + 1] = tempB;

        wilt[i] = wilt[i + 1];
        wilt[i + 1] = tempW;
        height[i] = height[i + 1];
        height[i + 1] = temp;
        stepCount++;
      }
    } else {
      if (stepCount) {
        i = -1;
        //i = i - stepCount - 1;
        console.log(i, stepCount);
        stepCount = 0;
      }
    }
  }
  return height;
}

function doesOverlap(bloom1, bloom2, wilt1, wilt2) {
  if (bloom1 > wilt2 || bloom2 > wilt1) {
    return false;
  }
  return true;
}

function testCase() {
  const test1 = [[5, 4, 3, 2, 1], [1, 1, 1, 1, 1], [365, 365, 365, 365, 365]];
  const test2 = [[5, 4, 3, 2, 1], [1, 5, 10, 15, 20], [5, 10, 14, 20, 25]];
  const test3 = [[3, 2, 5, 4], [1, 2, 11, 10], [4, 3, 12, 13]];

  const result1 = [1, 2, 3, 4, 5];
  const result3 = [4, 5, 2, 3];
  const res = getOrdering(...test3);
  console.log(res);
}

testCase();
