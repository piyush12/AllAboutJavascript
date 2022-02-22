const cars = ["Saab", "Volvo", "BMW"];

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// [ Array methods ]

// For Each

Array.prototype.forEachPolyfill = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Map

Array.prototype.MapPolyfill = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    arr.push(result);
  }
  return arr;
};

// Filter

Array.prototype.filterPolyfill = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// Reduce

Array.prototype.reducePolyfill = function (callback, intitialValue) {
  let accumulator = intitialValue;
  for (let i = 0; i < this.length; i++) {
    if (intitialValue !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

// () => {} Functions

// bind

Function.prototype.bindPolyfill = function (...context) {
  if (typeof this !== "function") {
    throw new Error("Must be called with function");
  }

  let fn = this;

  return function (...args) {
    return fn.apply(context[0], [...context.slice(1), ...args]);
  };
};

// Object.create

function ObjectCreate(obj) {
  function Inner() {}
  Inner.prototype = obj;
  return new Inner
}

// Deep Copy

function deep_copy(source){
  let copy = Array.isArray(source) ? [] : {};

  for(let key in source ){
    if(typeof source[key] === "object"){
      copy[key] = deep_copy(source[key])
    }else{
      copy[key] = source[key]
    }
  }
  return copy
}

let a = {
  msg:"hi",
  list:[1,2,3,4]
}

let b = deep_copy(a)
b.list.push(5)

