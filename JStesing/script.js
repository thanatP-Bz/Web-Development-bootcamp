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
/* const recordCollection = {
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


 */
/* const myArray = [];

let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);
 */
/* function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log((product += arr[i][j]));
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
 */
/* 
function multiply1(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

function multiply2(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply2(arr, n - 1) * arr[n - 1];
  }
}

console.log(multiply1([2, 3, 4, 5], 3));
 */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}
const data = lookUpProfile("Harry", "likes");
console.log(data);

const randomRage = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomRage(5, 10));
