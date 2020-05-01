// https://www.reddit.com/r/gtaonline/comments/5mhp1c/mc_business_supply_usage_and_production_after/

// 5 bars with 20 tics each of supplies.
// 1 tic of supplies are used every 1:12 (1.2mins) fully upgraded.
// So 1 box of Coke takes 30 minutes to make and consumes 25 tics. ~1.25 bars.
// Every tic costs $750 in supplies (when bought). 1 Bar is worth $15K in stock.
// It takes 300 minutes (5 hours) to produce full 10 stock.
// In those 300 minutes 250 tics of supplies will be used. 250 tics with 20 tics per bar mean that it will take 12.5 bars to fully produce $420K worth of coke.
// Without calculating business utility charges, that should mean that $420K worth of coke cost $187.5K of bought supplies. ($0 if stolen just time then.) So net profit with buying supplies is $232.5K every 5 hours.

// adding bars to progress element : https://stackoverflow.com/questions/31991092/progress-bar-with-reference-line-using-css-and-html
// custom styling progress element: https://stackoverflow.com/questions/42290719/custom-styling-progress-bar-in-css // https://css-tricks.com/html5-progress-element/
// progress element countdown: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

document.addEventListener('DOMContentLoaded', function(event){

})

let startBtn = document.querySelector('#start')

startBtn.addEventListener('click', function(event){
    
    let timeLeft = 100

    const cocaineSupply = setInterval(function() {
      if (timeLeft <= 0){
        clearInterval(cocaineSupply)
      }
    //   document.getElementById("cokeSupplyProgress").value = timeLeft
      
    // document.getElementById("progressCokeSupply").value = timeLeft
        document.querySelector('.percent').style.width = timeLeft + '%'
        console.log(timeLeft)
    // elem.style.width = width + '%'

    //   document.getElementById("progressBar").value = 25 - timeLeft;
        timeLeft -= 1
    }, 1000)

})

function cocaineMath() {



}

