const foo = (customers, n) => {
  if (customers.length === 0) return 0;

  const result = [];

  for (let i = 0; i < customers.length; i++) {
    if (result.length < n) {
      result.push(customers[i]);
    } else {
      const min = Math.min(...result);
      const idx = result.findIndex(el => el === min);

      result[idx] += customers[i];
    }
  }

  return Math.max(...result);
};

console.log(foo([], 1))
console.log(foo([1,2,3,4], 4))
console.log(foo([1,2,3,4], 1) === 10);
console.log(foo([1,2,3,4], 2) === 6);
console.log(foo([1,1,2,2,3,3,4,4], 3) === 8);