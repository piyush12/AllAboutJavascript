let string = "There are a few ways to approach this";

function calculateWords() {
  let map = new Map();
  string = string.split(" ");
  for (let str of string) {
    if (str !== " ") {
      if (map.has(str)) {
        map.set(str, map.get(str) + 1);
      } else {
        map.set(str, 1);
      }
    }
  }
  let max = { value: "", key: "" };
  for (let arr of map) {
    if (arr[1] > max.value) {
      max.value = arr[1];
      max.key = arr[0];
    }
  }
  const obj = Object.fromEntries(map);
  return { obj, max };
}

/// 2. Write complete JS code for finding the kth closest element in a particular array provided some nth value. Example, if you have array = [5, 2, 8, 6, 20, 16]. Then find the closest element to lets say 8. So, you have to print whichever element is near to 8.

// How to find and log the longest repeating serie of numbers in array with javascript

// var array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1], [2,2,2]

//// challenge https://iamclaudiajayne.medium.com/a-javascript-challenge-from-google-95b7dcf0c0a4

const maxNumbers = 20;
const numArray = [...Array(maxNumbers + 1).keys()].splice(1);
const arrayChunk = [];
for (let i = 0; i < numArray.length; i += 4) {
  arrayChunk.push(numArray.slice(i, i + 4));
}
const reversedArray = arrayChunk.map((array, i) =>
  (i + 1) % 2 === 0 ? array.reverse() : array
);

////
/* Gave question - computeAmount().thousand(55).lacs(45).crores(43).lacs(14).crores(23).thousand(1).value()

Output- 665956000 */

function ComputeAmount() {
  this.output = 0;
}

ComputeAmount.prototype.thousand = function (value) {
  this.output = this.output + value * 1000;
  return this;
};
ComputeAmount.prototype.lacs = function (value) {
  this.output = this.output + value * 100000;
  return this;
};
ComputeAmount.prototype.crores = function (value) {
  this.output = this.output + value * 10000000;
  return this;
};
ComputeAmount.prototype.value = function () {
  return this.output;
};

const computeAmount = new ComputeAmount();


/**
 * Fix This
 */

 class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  printSeatNumber() {
    console.log('The seats have not been set');
  }
}

class Meeting extends User{
  constructor(users) {
    super(users)
    const presenter = users[0];
    this.getPresenterName = presenter.getName.bind(presenter);
    this.setUserSeats(users);
  }
  setUserSeats(users) {
    for (let i = 0; i < users.length; i++) {
      users[i].printSeatNumber = () => {
        console.log(i);
      }
    }
  }
}

const users = [new User('Jeni'), new User('Dan'), new User('Carol')];
const meeting = new Meeting(users);

// Broken results
// console.log("meeting", meeting.getPresenterName(),meeting); // undefined (expected ‘Jeni’)
// users[0].printSeatNumber(); // 3 (expected 0)
// users[1].printSeatNumber(); // 3 (expected 1)
// users[2].printSeatNumber(); // 3 (expected 2)
