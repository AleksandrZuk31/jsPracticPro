// создал переменную
const num = 266219;
console.log(num);

let str = num.toString();
console.log(str);

const arr = (str.split(''));
console.log(arr);

// попробовал перемножить способом ручного перебора

let amountHead;
amountHead = (arr[0]*arr[1]*arr[2]*arr[3]*arr[4]*arr[5]);
console.log(amountHead);

// сделал цикл для перемножения

let amount;
let figure = 1;
for (let i = 0; i < arr.length; i++ ) {
  figure = arr[i] * figure;
  console.log(figure);
}
amount = figure;
console.log(amount);
 
// полученный результат возводим в стенень 3

let degree;
degree = amount ** 3;
console.log(degree);

// выводим первые две цифры полученного числа в консоль

let conclusion;
conclusion = degree.toString();
console.log(conclusion.substr(0, 2));