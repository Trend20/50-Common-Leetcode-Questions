/*Question:
Given an array of integers, find two numbers such that they add up to a specific target
number.
The function twoSum should return indices of the two numbers such that they add up to
the target, where index1 must be less than index2. Please note that your returned answers
(both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution.

Related topic
  ** Arrays
  ** Hash Table
*/

// Solution 1
// Brute force O(n^2)
const twoSum1 = (n, target) =>{
  n.sort();
  for(let i = 0; i < n.length; i++){
    for(let j = i + 1; j < n.length; j++){
      if(n[i] + n[j] == target){
        console.log(i, j);
      }
    }
  }
}
let myArray = [1, 9, 3, 7, 5, 2, 7, 4, 8];
let myTarget = 9;
twoSum(myArray, myTarget);


// Solution 2
// Hash Table

const twoSum2 = (n, target) =>{
  const keys = {};
  // loop through the array n
  for(let i = 0; i < n.length; i++){
    let val = n[i];
    if(keys[target - val] != null){
      return [keys[target - val], i]
    }
    keys[val] = i;
  }
}