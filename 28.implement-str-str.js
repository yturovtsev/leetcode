/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} h
 * @param {string} n
 * @return {number}
 */
var strStr = function(h, n) {
    // return h.indexOf(n);
    if (!n) return 0;
    for (let i = 0; i < h.length; i++) {
        if (n === h.slice(i, i + n.length)) {
            return i;
        }
    }
    return -1;
};
// @lc code=end
