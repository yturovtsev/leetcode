function req(arr) {
  console.log(arr);
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];

  return arr[0] + req(arr.slice(1));
}

function count(arr) {
  if (!arr.length) return 0;

  return 1 + count(arr.slice(1));
}

function max(arr) {
  if (arr.length === 2) return Math.max(...arr);

  return arr[0] > arr[1] ? max([arr[0], ...arr.slice(2)]) : max(arr.slice(1));
}
