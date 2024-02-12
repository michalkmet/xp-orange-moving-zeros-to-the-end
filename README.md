# Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

## Examples

Example 1:
[0] -> [0]

Example 2:
[] -> []

Example 3:
[false] -> [false]

Example 4:
[1, 0] -> [1, 0]

Example 5:
[0, 1] -> [1, 0]

Example 6:
[0, "a"] -> ["a", 0]

Example 7:
[0, 1, 2] -> [1, 2, 0]

Example 8:
[0, 1, 0, 2] -> [1, 2, 0, 0]

Example 9:
[0, 2, "a", false, 1] -> [2, "a", false, 1, 0]

Example 10:
[false,1,0,1,2,0,1,3,"a"] -> [false,1,1,2,1,3,"a",0,0]
