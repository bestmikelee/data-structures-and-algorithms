# Dynamic Programming Guide

Source: https://www.topcoder.com/community/data-science/data-science-tutorials/dynamic-programming-from-novice-to-advanced/#!

_An algorithmicc technique which is usually based on a recurrent formula and one (or some) starting states_

Key Point:

1. Define the "state" that represents the sub-problem. Is it the entire sequence/combination or is it just the length?

Example 1:

Given a list of N coins, their values (V1,V2, ..., Vn) and the total sum **S**. Find the minimum number of coins the sume of which is **S** (we can use as many coins of one type as we want), or report that it's not possible to select coins in such a way that they sum up to **S**

test case:
coin values are 1, 3, 5
sum is set to 11

sum 0: 0 coins  
sum 1: 1 coin + (sum 0) + (no other coin possible)  
sum 2: 1 coin + (sum 1)  
sum 3:

* option 1: 3-1 + (sum2)
* option 2: 3 coin

[Minimum Number Of Coins]('./minNumOfCoins.js')

Example 2:

Given a sequence of N numbers. Find the length of the longest non-decreasing sequence.

Example 3:

A table composed of N x M cells, each having a certain quantity of apples is given. You start from the upper left corner. At each step you can go down or right one cell. Find the maximum number of apples you can collect.

[Chess Metric]('./chessMetric.js')
