function range(start, end, step = 1) {
  let arr = [];
  if (step > 0) {
    if (start <= end) {
      while (start <= end) {
        arr.push(start);
        start += step;
      }
    } else {
      while (start >= end) {
        arr.push(start);
        start -= step;
      }
    }
    return arr;
  } else {
    let copy = Math.abs(step);
    if (start <= end) {
      return `No se puede llegar al número ${end} con el paso ${step}`;
    } else {
      while (start >= end) {
        arr.push(start);
        start -= copy;
      }
      return arr;
    }
  }
}

console.log(range(-11, 85, 12))
