const simpleQSort = arr => {
    const l = arr.length;

    if (l < 2) return arr;

    const pivot = arr[Math.round(l/2) - 1];
    const left = [];
    const right = [];
    const eq = [];

    for (let i = 0; i < l; i++) {
        const el = arr[i];
        el < pivot ? left.push(el) : el > pivot ?  right.push(el) : eq.push(el)
    }

    return [...simpleQSort(left), ...eq, ...simpleQSort(right)];
};
