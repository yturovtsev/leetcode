const a = [1,2,2,2,2,3,4,5,6,7,22,4,5,6,8,6,5,4,3,3,34,44,434645,5436546,765,4354635476,56453423,54365476,2,2,2,3,4,5,6,7,2,2,2,2,3,4,5,6,7];
const simpleQSort = arr => {
    const l = arr.length;

    if (l < 2) return arr;

    const half = arr[Math.round(l/2) - 1];
    const left = [];
    const right = [];
    const eq = [];

    for (let i = 0; i < l; i++) {
        const el = arr[i];
        el < half ? left.push(el) : el > half ?  right.push(el) : eq.push(el)
    }

    return [...simpleQSort(left), ...eq, ...simpleQSort(right)];
};
