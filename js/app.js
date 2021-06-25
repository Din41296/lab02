'use strict';

let count = 0;
let q1 =  function(){

  q1= prompt('Do I like Black color?(yes/no)');
  switch (q1.toLowerCase()) {
  case 'yes':
  case 'y':
    console.log('You\'re right');
    count++;
    alert('You\'re right');
    break;
  default:
    console.log('wrong answer');
    alert('wrong answer');
    break;


  }
  return q1;
} ;
q1();








let q2 = function(){


  q2= prompt('Do I like football?(yes/no)').toLowerCase();

  if (q2 === 'yes') {
    console.log('Right');
    count++;
    alert('Right');
  }
  else if (q2 === 'y') {
    console.log('Right');
    count++;
    alert('Right');
  } else {
    console.log('wrong');
    alert('wrong');
  }
  return q2;
};
q2();






let q3 = function(){

  q3= prompt('Do I like healthy food?(YES/NO)').toUpperCase();
  switch (q3) {
  case 'YES':
  case 'Y':
    console.log('Absolutely wrong');
    alert('Absolutely wrong');
    break;
  case 'NO':
  case 'N':
    console.log('you\'re right');
    count++;
    alert('you\'re right');
    break;
  default:
    console.log('Please next time answer yes/no');
    alert('Please next time answer yes/no');
    break;
  }
  return q3;

} ;
q3();








let q4 = function(){

  q4= prompt('Do I have a driving license?(YES/NO)').toUpperCase();
  if (q4 === 'YES') {
    console.log('I\'ll take you for drive one day');
    count++;
    alert('I\'ll take you for drive one day');
  } else if (q4 === 'Y') {
    console.log('I\'ll take you for drive one day');
    count++;
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
  return q4;
};
q4();







let q5 =  function(){

  q5= prompt('Do I watch turkish series?(yes/no)').toLowerCase();
  switch (q5) {
  case 'yes':
  case 'y':
    console.log('Right');
    count++;
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
  return q5;
};
q5();




let q6 = function(){

  q6= parseFloat(prompt('What do you think about my lucky number?'));
  for (let i = 0; i < 4; i++) {
    if (q6 === 50) {
      alert('you\'re right');
      console.log(i);
      count++;
      console.log(q6);
      break;

    } else if (q6 > 50) {
      alert('you\'re wrong too high answer');
      console.log(i);
      console.log(q6);
      q6 = parseFloat(prompt('What do you think about my lucky number?'));


    } else if (q6 < 50) {
      alert('you\'re wrong too low answer');
      console.log(i);
      console.log(q6);
      q6 = parseFloat(prompt('What do you think about my lucky number?'));
    }



  }
  return q6;
};
q6();

alert('My lucky number is 50');




let q7 = function(){


  q7=parseFloat(prompt('Guess my favorite 3 favorite numbers?'));
  let numbers = [5, 3, 10];
  for (let att = 0; att <= 5; att++) {
    for (let i = 0; i < numbers.length; i++) {
      if (q7 === numbers[i]) {
        alert('correct');
        att = 6;

      }

    }
  }
  return q7;

};
q7();






alert('Your score is = ' + count + 'of 7');























