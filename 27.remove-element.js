/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const q = nums.filter(el => el === val);

    if (!q) return nums.length;

    for (let i = 0; i < q.length; i++) {
        const idx = nums.findIndex(el => el === parseInt(q[i]));
        nums.splice(idx, 1)
    }

    return nums.length;
};
// @lc code=end


console.log(removeElement([28,2,20,19,18, 4,12,14,22,14,4]
, 4))