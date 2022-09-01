const zeroParameter = () => 89;
// console.log(zeroParameter());

const singleParameter = num => num/17;
// console.log(singleParameter(100));

const doubleParameter = (num1, num2) => (num1 + num2) / 2;
// console.log(doubleParameter(100, 150));

const multiLine = (num1, num2) => {
  const num1Sum = num1 + 7;
  const num2Sum = num2 + 7;
  const sum = num1Sum + num2Sum;
  return sum;
}
// console.log(multiLine(10, 15));