function range (first, end, rule = 1){
  let numArr = [];
  for (let i = first; i <= end; i += rule){
    numArr.push(i);
  }
  let numArrNeg = [];
  for (let i = first; i >= end; i-= rule){
    numArrNeg.push(i);
  }

  return first <= end ? numArr : numArrNeg
}

console.log(range(165, 89, 6))
