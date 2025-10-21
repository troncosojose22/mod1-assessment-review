const nums = [1, 2, 3]

const doublePure = (arr) => {
  const newArr = arr.map((x) => x * 2);
  return newArr;
};

const doubleImpure = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2
  }
};
