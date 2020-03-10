/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const arr = [...new Set(nums)];
    const l = arr.length;

    nums.length = l;
    for (let i = 0; i < l; i++) {
        nums[i] = arr[i];
    }
};
// @lc code=end