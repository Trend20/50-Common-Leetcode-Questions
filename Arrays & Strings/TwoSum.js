/*Question:
Given an array of integers, find two numbers such that they add up to a specific target
number.
The function twoSum should return indices of the two numbers such that they add up to
the target, where index1 must be less than index2. Please note that your returned answers
(both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution.
*/

// Solution 1
// Brute force O(n^2)
const twoSum = (n) =>{
  n.sort();
  let target = 9;
  for(let i = 0; i < n.length; i++){
    for(let j = i + 1; j < n.length; j++){
      if(n[i] + n[j] == target){
        console.log(i, j);
      }
    }
  }
}

let myArray = [1, 9, 3, 7, 5, 2, 7, 4, 8];
twoSum(myArray);


// Solution 2
// Hash Table