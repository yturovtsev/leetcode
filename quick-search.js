const simpleQSort = arr => {
    const l = arr.length;

    if (l < 2) return arr;

    const half = arr[Math.round(l/2) - 1];
    const left = arr.filter(el => el < half);
    const right = arr.filter(el => el > half);

    return [...simpleQSort(left), ...[half].concat(simpleQSort(right))]
};
