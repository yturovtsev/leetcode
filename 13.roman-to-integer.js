// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        CM: 900,
        CD: 400,
        XC: 90,
        XL: 40,
        IX: 9,
        IV: 4,
    };
    let result = 0;
    let skipNext = false;

    for (let i = 0; i < s.length; i++) {
        const w = s[i];
        const n = s[i+1];
        if (`${w}${n}` in map) {
            result += map[`${w}${n}`];
            skipNext = true;
        } else {
            if (!skipNext) {
                result += map[w];
            }
            skipNext = false;
        }
    }

    return result;
};
// @lc code=end
