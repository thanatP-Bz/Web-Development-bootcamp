/* const someObj = {
  propName: "John",
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

let fruits = ["Apple", "Banana", "Watermelon", "Orange"];
console.log(fruits.hasOwnProperty(3)); // true ('Orange')
console.log(fruits.hasOwnProperty(4)); // true ('Orange')
 */

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

const records = {
  mike: {
    age: 34,
    job: ["singer"],
    pet: [],
  },
  jame: {
    age: 20,
    job: ["consultant"],
  },
  may: {
    age: 30,
    job: ["driver"],
  },
};

const checkProp = (records, name, prop, value) => {
  if (prop !== "pet" && value !== "") {
    records[name][prop] = value;
  } else if (prop === "pet" && records[name].hasOwnProperty("pet") === false) {
    records[name][prop] = [value];
  } else if (prop === "pet" && value !== "") {
    records[name][prop].push(value);
  } else if (value === "") {
    delete records[name][prop];
  }
  return records;
};

checkProp(records, "mike", "food", "rice");
console.log(records);
