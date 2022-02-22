//// Sum digits

const sumDigits = (number) => {
  if (number === 0) {
    return 0;
  }

  const onePlacedValue = number % 10;
  const trimmedValues = Math.floor(number / 10);
  const sumOfRemainingItems = sumDigits(trimmedValues);
  return onePlacedValue + sumOfRemainingItems;
};

// console.log(sumDigits(5510));

// ************ Generate All Permutations
// ['dev', 'dve', 'edv', 'evd', 'vde', 'ved']

function generatePermutations(string) {
  if (string.length < 2) {
    return [string];
  }
  const permutationArray = [];

  for (let i = 0; i < string.length; i++) {
    const frontChar = string[i];
    const before = string.slice(0, i);
    const after = string.slice(i + 1, string.length);
    const remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);
    const remainingPermutaion = generatePermutations(remainingChars);

    for (let permutation of remainingPermutaion) {
      permutationArray.push(frontChar + permutation);
    }
  }
  return permutationArray;
}

console.log(generatePermutations("dev"));




const tree = {
  value: 6,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1
      }
    },
    right: {
      value: 7
    }
  },
  right: {
    value: 10,
    left: {
      value: 4
    },
    right: {
      value: 5
    }
  }
};

function sumTree(tree) {
  let count = tree.value;
  if (tree.left) {
    count += sumTree(tree.left);
  }
  if (tree.right) {
    count += sumTree(tree.right);
  }
  return count;
}

sumTree(tree);
