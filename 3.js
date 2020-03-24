const str = 'среда фывап среад ыафпв дерас торс сорт трос';

const foo = str => {
  const arr = str.split(' ');
  const l = arr.length;
  const result = [];
  const sort = str => str.split('').sort().join('');

  for (let i = 0; i < l; i++) {
    if (arr[i] === '') continue;
    const word = arr[i];
    const sortedWord = sort(arr[i]);
    const localRes = [word];

    for (let j = i + 1; j < l; j++) {
      const innerWord = arr[j];
      const sortedInnerWord = sort(arr[j]);

      if (sortedWord === sortedInnerWord) {
        localRes.push(innerWord);
        arr[j] = '';
      }
    }
    result.push(localRes);
  }
  return result;
};

console.log(foo(str));
