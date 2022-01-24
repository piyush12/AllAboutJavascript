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
  // console.log(getDiff);
  return getDiff;
}

difference([2, 1], [2, 3]);

/// Shuffle Array

const shuffleArray = [2, 5, 3, 14, 9, 24, 98, 56, 34, 10, 1, 20];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
  return array;
}

// console.log(shuffle(shuffleArray));

// find duplicates = [1,2,2,4,5,5,7,4,2,8,3,10,3]
// output = [2,3,4,5]

const duplicatesArray = [1, 2, 2, 4, 5, 5, 7, 4, 2, 8, 3, 10, 3];
function findDuplicates(array) {
  let set = new Set();
  let dups = [];
  for (let value of array) {
    if (set.has(value)) {
      dups.push(value);
    } else {
      set.add(value);
    }
  }
  const removeDups = new Set(dups);
  return [...removeDups];
}

function firstDuplicates(array) {
  let set = new Set();
  for (let value of array) {
    if (set.has(value)) {
      return value;
    }
    set.add(value);
  }
  return -1;
}

// console.log(findDuplicates(duplicatesArray));
// console.log(firstDuplicates(duplicatesArray));
