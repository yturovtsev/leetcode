const binarySearch = (arr, item) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let half = Math.round((max + min) / 2);

        console.log(arr[half]);
    
        if (arr[half] === item) {
            return half;
        }
        if (item > arr[half]) {
            min = half + 1;
        } else {
            max = half - 1;
        }
    }

    return null;
}
