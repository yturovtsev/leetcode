/*
* @lc app=leetcode id=53 lang=javascript
*
* [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(n) {
    let result = n.reduce((acc, el) => acc + el, 0);

    for (let i = 0; i < n.length; i++) {
        let count = n[i];

        if (count > result) result = count;

        for (let j = i + 1; j < n.length; j++) {
            count += n[j];

            if (count > result) {
                result = count;
            }
        }
    }

    return result;
};
// @lc code=end
