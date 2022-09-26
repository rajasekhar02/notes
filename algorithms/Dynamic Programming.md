[Lecture - 3](https://mediaspace.illinois.edu/media/t/1_hv5wrwvm)
===========

Algo - 1: Latin String Splitting
--------------------------------

	Splitable - O(2^n)
	Memoization
	Data structure: Array-O(n^2)
	Figuring out Memorization Structure


Algo-2: Longest Increasing SubSequence
--------------------------------------

	**Methods to Solve:** Input(), Output(left to right)
	Remember some thing extra details - Last number up to now
	Greedy Algorithm
	Order of filling the 2d arrays
		1. outter loop from right to left
		2. Inner loop any order as there are no dependency in the same column
	Running Time: O(n^2)

----

[Lecture - 4](https://mediaspace.illinois.edu/media/t/1_zsec8an2)
===========

What do we need to specify ?
1. English Specification
2. Recurrence with Braces (Optional if 4 is given)
3. Iterative Details (Optional if 4 is given)
	1. Data Structure to use (Name the axis of the data structure)
	2. Order to traverse the data structure 
	3. Running Time
4. Pseudo Code( Optional if 2,3 Specified)


LIS: Take 2
============

Right to left : Asking is this the first element 
=> Practice to Follow: Write a recurence first than the base case
Data Structure: 1d Array


Woodcutter's Problem
====================

A variation of Rod Cutting Problem

In rod cutting problem, we no need cut the sub parts once we did the cut

**Where as in this problem, we need cut the sub parts after we did the cut**

Problem to solve: min cost to the cut plank containing boards i..j into individual board ?

Do I need to remember any thing from the state ?

What is the structure ? -> Binary Tree

Time Complexity: O(n^3)

Filling Order:

	Choice 1: Left to Right, Bottom to top

	Choice 2: Diagonally from bottom to top
