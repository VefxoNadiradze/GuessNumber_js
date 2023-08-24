let RandomNumbPar = document.querySelector('.RandomNumbPar');
let GuessInput = document.querySelector('.GuessInput');
let GuessBtn = document.querySelector('.GuessBtn');
let AgainBtn = document.querySelector('.AgainBtn')
let message = document.querySelector('.message');
let score  = document.querySelector('.ScoreSpan');
let highScore = document.querySelector('.HighScoreSpan')


let scoreCounter = 20;

let RandomNumber = Math.floor(Math.random() * 20) + 1;
score.textContent = scoreCounter

GuessBtn.addEventListener('click', ()=>{
    let InputValue  = parseInt(GuessInput.value);

    // Block Empty input
    if(!InputValue){
    document.querySelector('img').style.display = 'none'
        message.textContent = 'No Number 🙅🏻'
        return GuessBtn
    }
    
    // Correct Number 
    if(InputValue === RandomNumber){    

        message.textContent = 'Correct Number '
        let img = document.querySelector('img');
        img.style.display = 'block'
      

          RandomNumbPar.textContent = RandomNumber

        if(scoreCounter > parseInt(highScore.textContent)){
            highScore.textContent = scoreCounter
        }

        GuessBtn.setAttribute('disabled', 'disabled')

    // Uncorrect Number
    }else if(InputValue !== RandomNumber){

        //decline Score
        score.textContent = scoreCounter-=1

          if(scoreCounter > 0){
            RandomNumber > InputValue ? 
           message.textContent = 'too low 📉' 
          : message.textContent = 'to high 📈'

          }else{
            message.textContent = 'you lose  😞'
            scoreCounter = 1;
        }
    }

})

// restart game
AgainBtn.addEventListener('click', ()=>{
    RandomNumber = Math.floor(Math.random() * 20) + 1;
    score.textContent = scoreCounter = 20
    message.textContent  = 'Start Guessing 🤔'
    GuessInput.value = ''
    document.querySelector('img').style.display = 'none'
    RandomNumbPar.innerHTML = ' <i class="fa-solid fa-question"></i>'
    GuessBtn.removeAttribute('disabled', 'disabled')
})
