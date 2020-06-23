// Arreglos en JS
const numberList = [1, 2, 3, 4];

let numberList2 = [...numberList, 5];

const numberList3 = numberList2.map(function (number) {
  return number * 2;
});

console.log({ numberList, numberList2, numberList3 });
