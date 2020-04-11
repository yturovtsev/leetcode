const str = 'среда торс фывап среад ыафпв дерас сорт трос';

const foo = str => {
  const arr = str.split(' ');
  // const l = arr.length;
  // const result = [];
  const sort = str => str.split('').sort().join('');

  // for (let i = 0; i < l; i++) {
  //   if (arr[i] === '') continue;
  //   const word = arr[i];
  //   const sortedWord = sort(arr[i]);
  //   const localRes = [word];

  //   for (let j = i + 1; j < l; j++) {
  //     const innerWord = arr[j];
  //     const sortedInnerWord = sort(arr[j]);

  //     if (sortedWord === sortedInnerWord) {
  //       localRes.push(innerWord);
  //       arr[j] = '';
  //     }
  //   }
  //   result.push(localRes);
  // }

  const reduced = arr.reduce((acc, str) => {
    const sortedWord = sort(str);

    // acc[sortedWord] = [ ...(acc[sortedWord] || []), str];  
    acc[sortedWord] = (acc[sortedWord] || []).concat(str);  

    return acc;
  }, {});

  return Object.values(reduced);
  // return result;
};

console.log(foo(str));
