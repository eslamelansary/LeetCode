/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum (nums,target){
    var isTarget = [];
    for(var i = 0; i < nums.length; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j] === target){
                isTarget.push(i);
                isTarget.push(j);
            }
        }
        
    }
    return isTarget;
}
var numbers = [0,3,1,2,5,8,9,11];
var t = 13;
var values = twoSum(numbers,t);
console.log(values);
