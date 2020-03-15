/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(arr) {
    const result = [];
    const l = arr.length;
    const last = arr[l - 1] + 1;
    let c = last >= 10 ? 1 : 0;

    if (c === 0) {
        arr[l - 1] = arr[l - 1] + 1;
        return arr;
    }

    for (let i = l - 2; i >= 0; i--) {
        const d = arr[i] ? arr[i] + c : c;
        if (d < 10) {
            result.push(d);
            c = 0;
        } else {
            result.push(d - 10);
            c = 1;
        }
    }

    if (c !== 0) result.push(c)

    return result.reverse().concat(arr[l - 1] - 10 + 1);
};
// @lc code=end
