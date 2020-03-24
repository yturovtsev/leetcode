
const sub = function(a, b) {
  const obj = {
    val: a - b,
    sub: function(a) {
      this.val -= a;
      return this;
    }
  };

  obj.toString = function() {
    return obj.val;
  }

  return obj;
}

console.log(sub(3, 2) == 1);
console.log(sub(3, 2).sub(-5) == 6);
console.log(sub(3, 2).sub(-5).sub(10) == -4);