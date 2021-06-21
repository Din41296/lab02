'use strict';


let q1 = prompt('Do I like Black color?(yes/no)');
switch (q1.toLowerCase()) {
case 'yes':
case 'y':
  console.log('You\'re right');
  alert('You\'re right');
  break;
default:
  console.log('wrong answer');
  alert('wrong answer');
  break;

}


let q2 = prompt('Do I like football?(yes/no)').toLowerCase();
// eslint-disable-next-line no-constant-condition
if (q2 === 'yes') {
  console.log('Right');
  alert('Right');
}
else if (q2 === 'y') {
  console.log('Right');
  alert('Right');
} else {
  console.log('wrong');
  alert('wrong');
}


let q3 = prompt('Do I like healthy food?(YES/NO)').toUpperCase();
switch (q3) {
case 'YES':
case 'Y':
  console.log('Absolutely wrong');
  alert('Absolutely wrong');
  break;
case 'NO':
case 'N':
  console.log('you\'re right');
  alert('you\'re right');
  break;
default:
  console.log('Please next time answer yes/no');
  alert('Please next time answer yes/no');
  break;
}

let q4 = prompt('Do I have a driving license?(YES/NO)').toUpperCase();
if (q4 === 'YES') {
  console.log('I\'ll take you for drive one day');
  alert('I\'ll take you for drive one day');
} else if (q4 === 'Y') {
  console.log('I\'ll take you for drive one day');
  alert('I\'ll take you for drive one day');
} else if (q4 === 'NO') {
  console.log('WRONG');
  alert('WRONG');
} else if (q4 === 'N') {
  console.log('WRONG');
  alert('WRONG');
} else {
  console.log('Kindly follow the question requirements');
  alert('Kindly follow the question requirements');
}

let q5 = prompt('Do I watch turkish series?(yes/no)').toLowerCase();
switch (q5) {
case 'yes':
case 'y':
  console.log('Right');
  alert('Right');
  break;
case 'no':
case 'n':
  console.log('Wrong');
  alert('Wrong');
  break;
default:
  console.log('Follow the question requirements');
  alert('Follow the question requirement');
  break;

}



let userName = prompt('Kindly enter you name');
console.log('Welcome to my website ' + userName);
alert('Welcome to my website ' + userName);
console.log('Your username is : ' + userName + '123');
alert('Your username is : ' + userName + '123');







