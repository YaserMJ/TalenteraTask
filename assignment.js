// ================== Question one ===================//

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

function contains(obj) {
  let values = [].slice.call(arguments, 1);

  return Object.keys(obj).some(function (key) {
    let item = obj[key];

    if (values.indexOf(item) !== -1) {
      return true;
    }

    if (typeof item === "object" && item !== null) {
      return contains.apply(null, [item].concat(values));
    }

    return false;
  });
}

console.log("44: ", contains(nestedObject, 44));
console.log("foo2: ", contains(nestedObject, "foo2"));
console.log("66: ", contains(nestedObject, 66));
console.log("Yaser: ", contains(nestedObject, "Yaser"));
