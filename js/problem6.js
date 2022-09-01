const object = {
  name: 'kudduch',
  age:39,
}
const {name, age} = object;
// console.log(name, age);



const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [ , balance,... rest] = array;
// console.log(balance);