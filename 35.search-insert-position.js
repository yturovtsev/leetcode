/*
* @lc app=leetcode id=35 lang=javascript
*
* [35] Search Insert Position
*/

// @lc code=start
/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function(nums, target) {
    const l = nums.length;
    if (target === 0 || target < nums[0]) return 0;
    if (target > nums[l-1]) return l;
    for (let i = 0; i < l; i++) {
        if (nums[i] === target ||
            (target < nums[i] && target > nums[i-1])
        ) return i;
    } 
};
// @lc code=end
