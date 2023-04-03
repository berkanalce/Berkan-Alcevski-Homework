function objectToArray(obj) {
  const result = [];
  for (const key in obj) {
    if (typeof obj[key] !== "function") {
      result.push(obj[key]);
    }
  }
  return result;
}
var myObj = {
  name: "berkan",
  age: 25,
  city: "Los angeles",
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I live in ${this.city}.`);
  },
  birthday: function () {
    this.age++;
    console.log(`Happy birthday! You are now ${this.age} years old.`);
  },
};

var myArr = objectToArray(myObj);
console.log(myArr);
// prva zadaca

function arrayToObject(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}

const arrs = ["Koray", 18, "London"];
const my = arrayToObject(arrs);
console.log(my);
// vtora zadarca

function daliseIsti(object1, object2) {
  var values1 = Object.values(object1);
  var values2 = Object.values(object2);
  if (values1.length !== values2.length) {
    return false;
  }
  for (let i = 0; i < values1.length; i++) {
    if (values1[i] !== values2[i]) {
      return false;
    }
  }
  return true;
}
const person1 = { name: "koray", age: 18, city: "Los Angeles" };
const person2 = { age: 18, city: "New York", name: "koray" };
const person3 = { name: "koray", age: 18, city: "Los Angeles" };

console.log(daliseIsti(person1, person2));
console.log(daliseIsti(person1, person3));
// treta zadaca
