/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs ||
        !Array.isArray(strs) ||
        strs.length === 0 ||
        !strs[0] ||
        typeof strs[0] !== 'string') return '';
    for (let index = 0; index < strs[0].length; index++) {
        for (let str of strs) {
            if (strs[0][index] !== str[index]) {
                return str.slice(0, index);
            }
        }
    }
    return strs[0]
}
// @lc code=end
