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

const arr = [1, 1, 1, 1, 33, 33, 3, 2, 5, 6, 7, 8, 3, 2, 2, 2, 2];
function deleteDuplicates(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (res[el]) {
      res[el] += 1;
    } else {
      res[el] = 1;
    }
  }
  return Object.keys(res).filter((key) => res[key] === 1);
}

deleteDuplicates(arr);

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

/**
 * var grouped = _.groupBy(['one', 'two', 'three'], 'length')
    console.log(grouped)
  // output: {3: ["one", "two"], 5: ["three"]}
 */
function groupBy(array, itemBy) {
  const itemGroupedBy = array.reduce((obj, item, i, a, k = item.length) => {
    // console.log(obj, item, i, a, k);
    return (obj[k] || (obj[k] = [])).push(item), obj;
  }, {});

  return itemGroupedBy;
}

// console.log(groupBy(["one", "two", "three"], "length"));

function findMissingNumber(array) {
  let minNumber = Math.min(...array);
  let maxNumber = Math.max(...array);
  //let set = new Set(array)
  let missingNumber = [];
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    hash[array[i]] = array[i];
  }
  console.log(hash);

  for (let i = minNumber; i <= maxNumber; i++) {
    // if(!set.has(i)){
    //   missingNumber.push(i)
    // }
    if (!hash[i]) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
}

const numArr = [10, 11, 12, 14];

// console.log(findMissingNumber(numArr));
