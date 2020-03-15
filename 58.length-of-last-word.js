/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s.trim()) return 0;
    const arr = s.split(' ').filter(el => el !== '');
    if (arr.length === 1) return arr[0].length;
    return arr[arr.length - 1].length;
};
// @lc code=end
