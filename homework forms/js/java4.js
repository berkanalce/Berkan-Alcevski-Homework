function berkanalce(arr, elementi) {
    const index = arr.indexOf(elementi);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  const novarr = [1, 2, 3, 4, 5, 6];
const elementii= 3;
const mojarr =berkanalce(novarr,elementii)    ;
console.log(novarr)

const fruits = [98,89,99,30,45];
let sports =  fruits.length;
console.log(fruits.length   )
 
const najgolembroj = [98,45,43,49,29,89,94];
let najgolem = najgolembroj[0];
for (let i = 1; i < najgolembroj; i++) {
  if (najgolembroj[i] > najgolem) {
    najgolem = najgolembroj[i];
  }
}

console.log( najgolem);
