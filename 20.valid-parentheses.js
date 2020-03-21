/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const arr = s.match(new RegExp(/(\(|\)|\[|\]|\{|\})/, 'gim'));
    const map = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    const result = [];

    if (arr.length % 2 !== 0) return false;

    
    // return arr
    for (let i = 0; i < arr.length; i+=2) {
        if (arr[i + 1] !== map[arr[i]]) return false;
    }
    return true;
};
// @lc code=end

console.log(isValid('()[]{}[](){}'))

function f() { console.log(this.x)}
var obj = { x: 'yandex' }
const arr = [{name: 'qwe', val: 1}, {name: 'asd', val: 2}]

function q(arr) {
    return arr.reduce((acc, el) => ({ ...acc, [el.name]: el.val}), {})
}

console.log(q(arr))