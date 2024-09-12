let input = document.getElementById('input');
let button = document.getElementById('btn');
let guesses = document.getElementById('guesses');
let wrong = document.querySelector('.wrong');

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);
let numGuesses = 0;

button.addEventListener('click',()=>{
    guessesNumber();
});

function guessesNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrong.innerHTML = 'Enter between 1 to 100';
    } else{
        numGuesses++
        guesses.innerHTML = 'No. of Guesses:'+numGuesses; 

        if(input.value>answer){
            wrong.innerHTML = 'You Guessed too High!'
            input.value = '';
        }
        else if(input.value<answer){
            wrong.innerHTML = 'You Guessed too Low!'
            input.value ='';

        }
        
        else{
            wrong.innerHTML = 'Congratulations! You Guessed Right!'

             setTimeout(()=>{
                reset();
             },6000);
        }

    }

    function reset(){
        numGuesses=0;
        answer=Math.floor(Math.random()*100)+1;
        input.value='';
        wrong.innerHTML='';
        guesses.innerHTML = 'No. of guesses: 0';
    }
}
