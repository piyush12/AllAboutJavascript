// once function

/* first way <---
function once(callBack) {
  let called = false;
  return function (...args) {
    if (!called) {
      console.log(this);
      callBack.apply(this, args);
      called = true;
    }
  };
}
*/

// second way <----

export function once(callBack, context) {
  let result;
  return function () {
    if (callBack) {
      result = callBack.apply(context || this, arguments);
      callBack = null;
    }
    return result;
  };
}

/* const createApplication = () => {
  console.log("application");
};

var initialize = once(createApplication);
*/

// Curry function

var abc = function (a, b, c) {
  return [a, b, c];
};

function curry(fn) {
  return function curryFunc(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    }
    return curryFunc.bind(this, ...args);
  };
}

var curried = curry(abc);


function someFn() {
  console.log(arguments);
}

Function.prototype.delay = function (delay) {
  return function (...args) {
    setTimeout(() => {
      this(...args);
    }, delay);
  }.bind(this);
};

const someFnWithDelay = someFn.delay(2000);

someFnWithDelay(1, 2, 3, 4, 5);