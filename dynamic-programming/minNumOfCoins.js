'use strict';

const memo = {};

function minNumOfCoins(sum) {
    if (sum <= 0) {
        return 0;
    }
    if (memo[sum]) {
        return memo[sum];
    }
    if (sum >= 5) {
        memo[sum] = minNumOfCoins(sum - 5) + 1;
        return memo[sum];
    }
    if (sum >= 3) {
        memo[sum] = minNumOfCoins(sum - 3) + 1;
        return memo[sum];
    }
    if (sum >= 1) {
        memo[sum] = minNumOfCoins(sum - 1) + 1;
        return memo[sum];
    }
}

function testCase() {
    const result = minNumOfCoins(4);
    console.log(result);
}

testCase();