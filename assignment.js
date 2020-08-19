// ================== Question one ===================//
const all = (array, callback) => {
  if (array.length === 0) return true;

  if (callback(array[0])) {
    array.shift();
    return all(array, callback);
  } else {
    return false;
  }
};

let allAreLessThanNumber = all([5, 6, 3, 7, 9], (number) => {
  return number < 10;
});

console.log(allAreLessThanNumber);

// ================== Question two ===================//
let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const contains = (nestedObject, value) => {
  for (key in nestedObject) {
    if (typeof nestedObject[key] === "object") {
      return contains(nestedObject[key], value);
    }

    if (nestedObject[key] === value) {
      return true;
    }
  }
  return false;
};

console.log(contains(nestedObject,44));
console.log(contains(nestedObject,777));
