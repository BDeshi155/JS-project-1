//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{quote: '"The only way to do great work is to love what you do."', 
person: 'Steve Jobs'

},{ quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts."', 
person: ' Winston Churchill'

},{ quote: '"In three words I can sum up everything I have learned about life: it goes on."', 
person: 'Robert Frost'

},{ quote: '"Be yourself; everyone else is already taken." ', 
person: 'Oscar Wilde'

},{ quote: '"The only limit to our realization of tomorrow will be our doubts of today." ', 
person: 'Franklin D. Roosevelt'

},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
/*
var minimumSum = function(num) {
    var newSum = num.toString().split('').join('');

    var num1 = '';
    var num2 = '';

    for(var i=0; i<newSum.length;i=i+2){
        num1 = num1 + newSum[i];
        num2 = num2 + newSum[i+1];

    }

    return Number(num1) + Number(num2) ;
};
*/
