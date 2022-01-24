// Binary Search
const numArrY = [1, 2, 3, 4, 5, 8, 9, 10, 22, 34, 56, 78];

function binarySearch(array, target) {
  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound <= upperBound) {
    const midPointIndex = Math.floor((lowerBound + upperBound) / 2);
    const midPointItem = array[midPointIndex];
    if (target === midPointItem) {
      return midPointIndex;
    }

    if (midPointIndex < target) {
      lowerBound = midPointIndex + 1;
    } else if (midPointIndex > target) {
      lowerBound = midPointIndex - 1;
    }
  }
  return -1;
}
// console.log(binarySearch(numArrY, 22));
const unSortedArray = [2, 5, 3, 14, 9, 24, 98, 56, 34, 10, 1, 20];

/**
 Bubble Sort
 */
function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// console.log(bubbleSort(unSortedArray));

/**
 * Selection Sort
 */

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

// console.log("selection sorted array", selectionSort(unSortedArray));

/**
 * Insertion Sort
 */

function insertionSort(array){
  for(let i = 1; i < array.length; i++){
    let temp = array[i];
    for(var j = i - 1; array[j] > temp && j > -1; j--){
      array[j+1] = array[j];
    }
    array[j+1] = temp
  }
  return array
}

// console.log("insertion sort", insertionSort(unSortedArray))