class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let allKey = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKey.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKey;
  }

  values() {
    let allKey = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKey.push(this.dataMap[i][j][1]);
        }
      }
    }
    return allKey;
  }
}

// let hTable = new HashTable();
// hTable.set("banana", 40);
// hTable.set("mango", 20);
// console.log("hTable", hTable);

/**
 * // Input
const emails = ['a@gmail.com', 'hey@skilled.dev', 'b@yahoo.com', 'hey@skilled.dev'];

// Output: findHackerEmail(emails);
'hey@skilled.dev'

 */
const emails = [
  "a@gmail.com",
  "hey@skilled.dev",
  "b@yahoo.com",
  "hey@skilled.dev",
];

function findHackerEmail(emails) {
  let emailCountMap = {};
  let email = "";
  let count = 0;

  for (let mailId of emails) {
    if (!emailCountMap[mailId]) {
      emailCountMap[mailId] = 1;
    } else {
      emailCountMap[mailId]++;
    }
  }

  for (let emailCount in emailCountMap) {
    if (emailCountMap[emailCount] > count) {
      count = emailCountMap[emailCount];
      email = emailCount;
    }
  }
  return email;
}
findHackerEmail(emails);

/**
 * const array1 = [1,2,4];
 * cont array2 = [3,5,4];
 * itemInCommon(array1, array2) // 4
 */

const array1 = [1, 2, 4];
const array2 = [3, 5, 4];

function itemInCommon(array1, array2) {
  let itemObj = {};
  for (let arr of array1) {
    itemObj[arr] = arr;
  }
  for (let arr2 of array2) {
    if (itemObj[arr2]) return true;
  }

  return false;
}

itemInCommon(array1, array2);

/**
 * // Input
const array = [4, -3, 80, 2, 9, 13, 5, 8];
const target = 10;

// Output: getTargetIndexes(array, target);
[[1, 5], [3, 7]];

 */
const arrayTargetTwoSum = [4, -3, 80, 2, 9, 13, 5, 8];
const target = 10;

function getTargetIndexes(arr, target) {
  let nums = new Map();
  let results = [];
  /*
    // brute force
    let output = [];
     for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        output.push([arr[i], arr[j]]);
      }
    }
  }
  return output;
  */
  for (let i = 0; i < arr.length; i++) {
    let targetSum = target - arr[i];
    if (nums.has(targetSum)) {
        results.push([i, nums.get(targetSum)])
    }
    nums.set(arr[i], i);
  }
  return results;
}

getTargetIndexes(arrayTargetTwoSum, target);
