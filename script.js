 'use strict'
let weakRu, weakEn, lang;

// создаем массивы с днями недели

weakRu = ['понедельник', 'вторник', 'среда','четверг','пятница','суббота','воскресенье'];
weakEn = ['monday', 'tuesday', 'wednesday','thursday','friday','saturday','sunday'];

// запрашиваем выбор языка

lang = prompt('Введите язык (ru, en)');

// выбод массива 1 вариант

if (lang === 'ru') {
    console.log(weakRu);
} else if (lang === 'en') {
  console.log(weakEn);
} else {
  console.log('Некорректный ввод');
}

// выбод массива 2 вариант

switch (lang) {
  case 'ru':
    console.log(weakRu);
    break;
  case 'en':
    console.log(weakEn);
    break;
  default:
    console.log('Некорректный ввод');
}

// вывод массива 3 вариант 

let langType = {
  'ru': ['понедельник', 'вторник', 'среда','четверг','пятница','суббота','воскресенье'],
  'en': ['monday', 'tuesday', 'wednesday','thursday','friday','saturday','sunday']
}; 

console.log(langType[lang]);

// вторая задача

let namePerson = 'Артем';

let result = namePerson === 'Артем' ? console.log('директор') : 
namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');
