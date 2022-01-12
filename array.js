import { once } from "./function";

// Chunk Array ['a', 'b', 'c', 'd'], 2 returns [['a', 'b'], ['c', 'd']]

function chunkArray(array, chunkWith) {
  let newArray = [];
  for (let i = 0; i < array.length; i += chunkWith) {
    newArray.push(array.slice(i, i + chunkWith));
  }
  return newArray;
}

chunkArray(["a", "b", "c", "d"], 2);

// Difference difference([2, 1], [2, 3]) // [1]

function difference(array1, array2) {
  const getDiff = array1.filter((arr) => !array2.includes(arr));
  console.log(getDiff);
}

difference([2, 1], [2, 3]);
